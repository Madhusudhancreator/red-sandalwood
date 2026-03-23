"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarMobile } from "./NavbarMobile";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: t.nav.home, href: "/" },
      { label: t.nav.ourStory, href: "/our-story" },
      { label: t.nav.whyChooseUs, href: "/why-choose-us" },
      { label: t.nav.farmerBenefits, href: "/farmer-benefits" },
      { label: t.nav.helpSupport, href: "/help-support" },
      { label: t.nav.legalSteps, href: "/legal-steps" },
      { label: t.nav.ourMembers, href: "/#faq" },
    ],
    [t]
  );

  const solid = !isHome || scrolled;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${solid ? "bg-white/95 text-forest-900 shadow-md backdrop-blur-xl" : "bg-transparent text-forest-900"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Red Sanders Growers Association – Andhra Pradesh"
            width={52}
            height={52}
            priority
            className="rounded-full"
          />
          <div className="hidden xl:block">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sandalwood-700">SRSGA</p>
            <p className="text-sm font-semibold">Sandalwood & Red Sanders Growers Association</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-forest-100 hover:text-forest-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/join-now"
            className="inline-flex items-center justify-center rounded-full bg-sandalwood-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sandalwood-700"
          >
            {t.nav.joinNow}
          </Link>
        </div>

        <NavbarMobile items={navItems} joinNowLabel={t.nav.joinNow} />
      </div>
    </header>
  );
}
