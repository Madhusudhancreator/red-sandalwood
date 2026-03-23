"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavItem } from "./Navbar";

export function NavbarMobile({
  items,
  joinNowLabel,
}: {
  items: NavItem[];
  joinNowLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="rounded-full border border-forest-900/10 bg-white/90 p-2 text-forest-900 shadow-sm backdrop-blur"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 z-50 mx-4 flex max-h-[calc(100vh-6rem)] flex-col overflow-hidden rounded-[28px] border border-forest-900/10 bg-white text-forest-900 shadow-2xl">
          <div className="overflow-y-auto px-4 py-4">
            {items.map((item) => (
              <div key={item.href} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm font-medium hover:text-sandalwood-700 transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t border-gray-100 bg-sandalwood-50/60 px-4 py-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm text-gray-500">Language</span>
              <LanguageSwitcher />
            </div>
            <Link
              href="/join-now"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-sandalwood-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sandalwood-700"
            >
              {joinNowLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
