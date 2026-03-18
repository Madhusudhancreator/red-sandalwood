"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className=" px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src="/assets/logo-white.png"
            alt="Red Sanders Growers Association – Andhra Pradesh"
            width={120}
            height={42}
            className="mb-3"
          />
          <p className="text-sm text-forest-200">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">{t.footer.quickLinks}</h4>
          <ul className="space-y-1 text-sm">
            {t.footer.quickLinkItems.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sandalwood-500 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">{t.footer.resources}</h4>
          <ul className="space-y-1 text-sm">
            {t.footer.resourceItems.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sandalwood-500 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">{t.footer.contact}</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/contact" className="hover:text-sandalwood-500 transition-colors">
                {t.footer.getInTouch}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-700 py-4 text-center text-xs text-forest-400">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}
