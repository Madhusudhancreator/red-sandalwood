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
        className="p-2 rounded hover:bg-forest-100 transition-colors"
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
        <div className="absolute top-16 left-0 right-0 bg-forest-800 text-forest-100 border-t border-forest-700 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          {items.map((item) => (
            <div key={item.href} className="border-b border-forest-700 last:border-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm hover:bg-forest-700 transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* Join Now CTA */}
          <div className="px-4 py-3 border-b border-forest-700">
            <Link
              href="/join-now"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-2 text-sm font-semibold rounded bg-sandalwood-600 text-white hover:bg-sandalwood-700 transition-colors"
            >
              {joinNowLabel}
            </Link>
          </div>

          {/* Language switcher */}
          <div className="px-4 py-3 flex items-center gap-2">
            <span className="text-sm text-forest-300">Language:</span>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
