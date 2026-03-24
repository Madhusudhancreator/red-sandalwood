"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      {/* ── Top accent bar ── */}
      <div className="h-1" style={{ background: "linear-gradient(to right, var(--color-hunter-green), var(--color-olive-wood), var(--color-dark-wine))" }} />

      {/* ── Main footer body ── */}
      <div style={{ backgroundColor: "var(--color-deep-mocha)" }}>
        <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo-white.png"
              alt="SRSGA"
              width={80}
              height={80}
              className="mb-4 rounded-full"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "var(--color-hunter-green)" }}>
              SRSGA
            </p>
            <p className="text-sm font-bold leading-snug mb-3" style={{ color: "var(--color-almond-cream)" }}>
              Sandalwood &amp; Red Sanders<br />Growers Association
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(243,229,216,0.58)" }}>
              {t.footer.tagline}
            </p>
            <div className="flex gap-2 mt-5">
              <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] mb-5" style={{ color: "var(--color-almond-cream)" }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {t.footer.quickLinkItems.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm transition-colors group"
                    style={{ color: "rgba(243,229,216,0.65)" }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-3"
                      style={{ backgroundColor: "var(--color-hunter-green)" }} />
                    <span className="group-hover:text-white transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] mb-5" style={{ color: "var(--color-almond-cream)" }}>
              {t.footer.resources}
            </h4>
            <ul className="space-y-3">
              {t.footer.resourceItems.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm transition-colors group"
                    style={{ color: "rgba(243,229,216,0.65)" }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-3"
                      style={{ backgroundColor: "var(--color-olive-wood)" }} />
                    <span className="group-hover:text-white transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.22em] mb-5" style={{ color: "var(--color-almond-cream)" }}>
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm transition-colors group"
                  style={{ color: "rgba(243,229,216,0.65)" }}
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-3"
                    style={{ backgroundColor: "var(--color-dark-wine)" }} />
                  <span className="group-hover:text-white transition-colors">{t.footer.getInTouch}</span>
                </Link>
              </li>
            </ul>

            {/* Join Now CTA */}
            <Link
              href="/join-now"
              className="inline-flex items-center gap-2 mt-8 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
              Join SRSGA
            </Link>
          </div>

        </div>

        {/* ── Copyright bar ── */}
        <div className="px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(243,229,216,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(243,229,216,0.4)" }}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-xs" style={{ color: "rgba(243,229,216,0.3)" }}>
            Andhra Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
