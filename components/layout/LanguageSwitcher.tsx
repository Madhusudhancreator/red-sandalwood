"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const options: { value: Lang; label: string }[] = [
    { value: "en", label: t.lang.en },
    { value: "te", label: t.lang.te },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-sandalwood-300 rounded hover:bg-sandalwood-50 hover:border-sandalwood-500 transition-colors text-gray-700"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{lang.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-sandalwood-200 rounded-md shadow-lg z-50 min-w-[120px]">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setLang(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-md last:rounded-b-md ${
                lang === opt.value
                  ? "bg-sandalwood-50 text-sandalwood-700 font-medium"
                  : "hover:bg-sandalwood-50 hover:text-sandalwood-700 text-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
