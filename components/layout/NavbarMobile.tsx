"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "./Navbar";

export function NavbarMobile({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="p-2 rounded hover:bg-forest-700 transition-colors"
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
        <div className="absolute top-16 left-0 right-0 bg-forest-800 border-t border-forest-700 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          {items.map((item) => (
            <div key={item.href} className="border-b border-forest-700 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-forest-700 transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${expanded === item.href ? "rotate-180" : ""}`}
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
                  {expanded === item.href && (
                    <div className="bg-forest-900">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-6 py-2 text-sm text-sandalwood-200 hover:text-sandalwood-500 transition-colors"
                      >
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-6 py-2 text-sm text-forest-100 hover:text-sandalwood-500 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-forest-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
