"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type NavItem = {
  label: string;
  href: string;
};

const ICONS = ["one", "two", "three", "four"] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y <= 10 || y < lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.ourStory, href: "/our-story" },
    { label: t.nav.whyChooseUs, href: "/why-choose-us" },
    { label: t.nav.farmerBenefits, href: "/farmer-benefits" },
    { label: t.nav.helpSupport, href: "/help-support" },
    { label: t.nav.legalSteps, href: "/legal-steps" },
    { label: t.nav.ourMembers, href: "/faq" },
  ];

  return (
    <>
      <div className="h-[140px]" aria-hidden="true" />
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        {/* Band 1: Logo + icons */}
        <div style={{ backgroundColor: "var(--color-almond-cream)", borderBottomColor: "var(--color-hunter-green)" }} className="border-b-2">
          <div className="flex items-center justify-between px-4 lg:px-8 py-3">

            <Link href="/" className="flex items-center gap-4 shrink-0">
              <div style={{ borderColor: "var(--color-hunter-green)" }} className="rounded-full border-2 overflow-hidden shrink-0">
                <Image src="/assets/logo.png" alt="SRSGA" width={72} height={72} priority className="rounded-full" />
              </div>
              <div className="hidden sm:block">
                <p style={{ color: "var(--color-hunter-green)" }} className="text-[11px] font-bold uppercase tracking-[0.25em] mb-0.5">SRSGA</p>
                <p style={{ color: "var(--color-deep-mocha)", lineHeight: "1.15", letterSpacing: "-0.01em" }} className="text-2xl font-extrabold">
                  Sandalwood &amp; Red Sanders
                </p>
                <p style={{ color: "var(--color-dark-wine)" }} className="text-base font-bold leading-snug tracking-wide">Growers Association</p>
                <p style={{ color: "var(--color-olive-wood)" }} className="text-xs font-medium tracking-widest uppercase mt-0.5">Andhra Pradesh</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              {ICONS.map((slot) => (
                <div key={slot} className="px-2 flex items-center justify-center">
                  <Image src={`/icons/${slot}.webp`} alt={slot} width={72} height={56} className="object-contain h-14 w-auto" />
                </div>
              ))}
              <Link
                href="/join-now"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
                className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-bold shadow-md transition hover:opacity-90 ml-2"
              >
                {t.nav.joinNow}
              </Link>
            </div>

            <div className="md:hidden">
              <NavbarMobile items={navItems} joinNowLabel={t.nav.joinNow} />
            </div>
          </div>
        </div>

        {/* Band 2: Nav links */}
        <div style={{ backgroundColor: "var(--color-hunter-green)" }} className="shadow-md">
          <div className="flex items-center justify-between px-4 lg:px-8 h-11">
            <nav className="hidden md:flex items-stretch h-full">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ color: "var(--color-almond-cream)" }}
                  className="px-4 h-full inline-flex items-center text-sm font-medium transition-colors hover:bg-[#6B1F1A] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
