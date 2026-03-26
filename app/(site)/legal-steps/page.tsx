import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLegalStepsPageData } from "@/lib/sanity/queries/legalSteps";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLegalStepsPageData();
  return {
    title: data.seo?.metaTitle ?? "Legal Advice – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Step-by-step legal guidance for Red Sandalwood farmers in Andhra Pradesh — registration, documentation, harvest permits, and transport compliance.",
  };
}

const steps = [
  {
    number: "01",
    title: "Land Ownership Verification",
    description:
      "Ensure your land ownership documents (Pattadar Passbook / RoR) are up to date and registered in your name. This is the foundation of all legal processes for your plantation.",
    note: "Required: Pattadar Passbook, Aadhaar Card",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plantation Registration",
    description:
      "Register your Red Sandalwood plantation with the local Mandal Forest Officer (MFO) or Divisional Forest Officer (DFO). This officially records your trees and protects your ownership rights.",
    note: "Required: Land documents, application form, site details",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Obtain No Objection Certificate (NOC)",
    description:
      "In some districts, a No Objection Certificate from the Forest Department is required before beginning plantation on private land. SRSGA helps you determine if this applies to your area.",
    note: "Depends on district — SRSGA will advise",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Tree Numbering & Survey",
    description:
      "Once trees reach a certain age, the Forest Department will conduct a survey and number each tree. This is a mandatory step before any harvesting activity is permitted.",
    note: "Applicable when trees are 5+ years old",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Harvest Permission Application",
    description:
      "When your trees are mature and ready for harvest (15–20 years), you must apply for a Timber Felling Permission from the Forest Department. This requires your plantation registration records.",
    note: "Apply 3–6 months before planned harvest",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Transit Permit for Transport",
    description:
      "After harvest, a Transit Permit (Form 47 / equivalent) is required to transport the timber from your land to a storage facility or buyer. This prevents any legal issues during transport.",
    note: "Required at every check post during transport",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Sale & Trade Documentation",
    description:
      "Any sale of Red Sandalwood timber must be documented with proper invoices, buyer details, and weight certificates. SRSGA guides members through the correct documentation for legal trade.",
    note: "Keep records of all transactions",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const legalSupport = [
  {
    title: "Document Preparation",
    desc: "We help prepare all required forms and documents correctly before submission — no errors, no rejections.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Department Liaison",
    desc: "We accompany members to forest department offices and assist with applications on your behalf.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Compliance Reminders",
    desc: "We keep track of important deadlines and notify members when action is needed — so nothing slips.",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Legal Query Support",
    desc: "Any legal question you have — we are one call away with clear, simple answers in Telugu or English.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default async function LegalStepsPage() {
  const data = await getLegalStepsPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[620px] flex items-end">
        <Image
          src="/assets/red4.webp"
          alt="Red Sandalwood processing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 w-full">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.22em] mb-5"
            style={{
              backgroundColor: "rgba(107,31,26,0.65)",
              color: "var(--color-almond-cream)",
              border: "1px solid rgba(243,229,216,0.25)",
            }}
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="6" r="5" opacity="0.4" />
              <circle cx="6" cy="6" r="2.5" />
            </svg>
            Legal Compliance
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            {data.heroTitle}
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: "rgba(243,229,216,0.85)" }}
          >
            {data.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ── Intro Split ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Why It Matters
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107,31,26,0.2)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.introTitle}
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            {data.introBody.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "rgba(58,47,47,0.82)" }}>
                {para}
              </p>
            ))}

            {/* Status pills */}
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-3 border border-black/5"
                style={{ backgroundColor: "rgba(62,107,62,0.1)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" fill="rgba(62,107,62,0.2)" stroke="#3E6B3E" strokeWidth="1" />
                  <path d="M4 7l2 2 4-4" stroke="#3E6B3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-bold" style={{ color: "var(--color-hunter-green)" }}>
                  Legal to grow on private land
                </p>
              </div>
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-3 border border-black/5"
                style={{ backgroundColor: "rgba(107,31,26,0.08)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-wine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-sm font-bold" style={{ color: "var(--color-dark-wine)" }}>
                  Permits required to harvest
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/red14.webp"
              alt="Farmer harvesting Red Sandalwood"
              width={720}
              height={560}
              className="w-full h-[460px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── 7 Legal Steps Timeline ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              >
                Step by Step
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.stepsTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(58,47,47,0.7)" }}>
              Follow these steps to keep your Red Sandalwood plantation fully legal and protected.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[22px] top-0 bottom-0 w-0.5 rounded-full"
              style={{ background: "linear-gradient(to bottom, var(--color-hunter-green), var(--color-dark-wine), var(--color-olive-wood))" }}
            />

            <div className="flex flex-col gap-6">
              {data.steps.slice(0, 7).map((cmsStep, si) => {
                const step = { ...steps[si % steps.length], ...cmsStep, number: `0${si + 1}`, note: cmsStep.documentNote };
                return (
                <div key={step.number} className="flex gap-6 relative">
                  {/* Circle badge */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 z-10 shadow-md"
                    style={{ backgroundColor: step.accent, color: "var(--color-almond-cream)" }}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex-1"
                    style={{ backgroundColor: step.bg }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "white", color: step.accent, border: `1px solid ${step.accent}30` }}
                      >
                        {step.icon}
                      </div>
                      <h3
                        className="text-base font-extrabold"
                        style={{ color: "var(--color-deep-mocha)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(58,47,47,0.78)" }}>
                      {step.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2"
                      style={{ backgroundColor: "white", border: `1px solid ${step.accent}25` }}
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: step.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <p className="text-xs font-semibold" style={{ color: step.accent }}>
                        {step.note}
                      </p>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Break ── */}
      <section className="relative isolate overflow-hidden min-h-[380px] flex items-center">
        <Image
          src="/assets/red13.webp"
          alt="Timber transport"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(107,31,26,0.4) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="var(--color-olive-wood)" />
              <circle cx="8" cy="8" r="6" stroke="var(--color-olive-wood)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
          </div>
          <p
            className="text-2xl sm:text-3xl font-extrabold leading-relaxed mb-6"
            style={{ color: "var(--color-almond-cream)" }}
          >
            &ldquo;Doing it right from the start saves years of trouble later.&rdquo;
          </p>
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(243,229,216,0.6)" }}>
            — SRSGA Legal Advisory Team
          </p>
        </div>
      </section>

      {/* ── How SRSGA Supports You Legally ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Our Legal Role
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              How SRSGA Supports You Legally
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {legalSupport.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: item.bg }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "white", color: item.accent, border: `1px solid ${item.accent}30` }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: item.accent, opacity: 0.6 }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold mb-2" style={{ color: "var(--color-deep-mocha)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.75)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Unsplash: legal/document consultation image */}
          <div className="rounded-2xl overflow-hidden shadow-md grid md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop&q=80"
                alt="Legal document preparation and signing"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
            </div>
            <div
              className="flex flex-col justify-center px-8 py-8"
              style={{ backgroundColor: "var(--color-deep-mocha)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "rgba(243,229,216,0.5)" }}
              >
                SRSGA Legal Promise
              </p>
              <p
                className="text-lg font-extrabold leading-snug mb-4"
                style={{ color: "var(--color-almond-cream)" }}
              >
                From the first document to the final permit — we are with you every step.
              </p>
              <ul className="space-y-2.5">
                {[
                  "No farmer left to navigate alone",
                  "100% legal, government-compliant process",
                  "Expert guidance in Telugu & English",
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" fill="rgba(62,107,62,0.3)" stroke="#3E6B3E" strokeWidth="1" />
                      <path d="M4 7l2 2 4-4" stroke="#a8d4a8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium" style={{ color: "rgba(243,229,216,0.82)" }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section
        className="px-4 sm:px-8 lg:px-16 pb-0"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] items-stretch">
            <div
              className="flex items-center justify-center px-8 py-6"
              style={{ backgroundColor: "var(--color-dark-wine)" }}
            >
              <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="px-8 py-6" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(243,229,216,0.55)" }}>
                Our Legal Commitment
              </p>
              <p className="text-base sm:text-lg font-semibold leading-relaxed" style={{ color: "var(--color-almond-cream)" }}>
                Every SRSGA member grows with{" "}
                <span style={{ color: "#a8d4a8" }}>full legal protection</span> —
                documented, registered, and{" "}
                <span style={{ color: "#f0d4a8" }}>recognised by the government</span>{" "}
                at every stage of their{" "}
                <span style={{ color: "#f9edd8" }}>plantation journey.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative isolate overflow-hidden py-24 px-4 mt-16">
        <Image
          src="/assets/red2.webp"
          alt="Red Sandalwood tree"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(107,31,26,0.35) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.22em] mb-6"
            style={{
              backgroundColor: "rgba(107,31,26,0.65)",
              color: "var(--color-almond-cream)",
              border: "1px solid rgba(243,229,216,0.25)",
            }}
          >
            Stay Protected
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            Stay Legal, Stay Protected
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="var(--color-olive-wood)" />
              <circle cx="8" cy="8" r="6" stroke="var(--color-olive-wood)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
          </div>
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10"
            style={{ color: "rgba(243,229,216,0.88)" }}
          >
            Join SRSGA and let us handle the legal process so you can focus on
            growing your Red Sandalwood plantation with full confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/join-now"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold shadow-xl transition hover:opacity-90"
              style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
            >
              Join SRSGA
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border px-10 py-4 text-base font-bold transition hover:opacity-80"
              style={{ borderColor: "rgba(243,229,216,0.5)", color: "var(--color-almond-cream)" }}
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
