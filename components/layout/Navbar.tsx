"use client";

import Link from "next/link";
import Image from "next/image";
import { NavbarMobile } from "./NavbarMobile";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t.nav.ourStory, href: "/our-story" },
    { label: t.nav.whyChooseUs, href: "/why-choose-us" },
    { label: t.nav.farmerBenefits, href: "/farmer-benefits" },
    { label: t.nav.helpSupport, href: "/help-support" },
    { label: t.nav.legalSteps, href: "/legal-steps" },
    { label: t.nav.ourMembers, href: "/our-members" },
  ];

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/logo-white.png"
            alt="Red Sanders Growers Association – Andhra Pradesh"
            width={50}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm rounded hover:bg-forest-100 hover:text-forest-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Language switcher */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/join-now"
            className="px-4 py-2 text-sm font-semibold rounded bg-sandalwood-600 text-white hover:bg-sandalwood-700 transition-colors"
          >
            {t.nav.joinNow}
          </Link>
        </div>

        {/* Mobile nav */}
        <NavbarMobile items={navItems} joinNowLabel={t.nav.joinNow} />
      </div>
    </header>
  );
}
