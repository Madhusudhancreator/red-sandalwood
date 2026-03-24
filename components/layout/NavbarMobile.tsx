"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "./Navbar";

export function NavbarMobile({ items, joinNowLabel }: { items: NavItem[]; joinNowLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{ borderColor: "rgba(62,107,62,0.3)", backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
        className="rounded-full border p-2 shadow-sm"
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
        <div
          style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)", borderColor: "rgba(62,107,62,0.15)" }}
          className="absolute inset-x-0 top-[140px] z-50 mx-4 flex max-h-[calc(100vh-10rem)] flex-col overflow-hidden rounded-[28px] border shadow-2xl"
        >
          <div className="overflow-y-auto px-4 py-4">
            {items.map((item) => (
              <div key={item.href} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--color-deep-mocha)" }}
                  className="block px-2 py-3 text-sm font-medium hover:text-[#3E6B3E] transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ borderTopColor: "rgba(62,107,62,0.15)", backgroundColor: "rgba(239,225,211,0.6)" }} className="mt-auto border-t px-4 py-4">
            <Link
              href="/join-now"
              onClick={() => setOpen(false)}
              style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              className="block w-full rounded-full px-4 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90"
            >
              {joinNowLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
