import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWhyChooseUsPageData } from "@/lib/sanity/queries/whyChooseUs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getWhyChooseUsPageData();
  return {
    title: data.seo?.metaTitle ?? "Why Choose Us – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Discover why farmers across Andhra Pradesh trust SRSGA for Red Sandalwood guidance, legal support, and a secure farming future.",
  };
}

const reasons = [
  {
    title: "Expert Farming Guidance",
    description:
      "From soil preparation to seedling care and maintenance, we provide clear, tested guidance at every stage of the Red Sandalwood growing process.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" /><path d="M12 13C9.5 10.5 6 9.5 3 10.5c0 4 3.5 6.5 9 4.5" />
        <path d="M12 13c2.5-2.5 6-3.5 9-2.5 0 4-3.5 6.5-9 4.5" />
      </svg>
    ),
  },
  {
    title: "Full Legal Support",
    description:
      "We guide you through forest department registration, documentation, and all permits needed for plantation, harvesting, and transport — fully compliant with AP regulations.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Trusted Farmer Community",
    description:
      "Join a network of hundreds of growers who share knowledge, experience, and support. With SRSGA, you are never alone in your farming journey.",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Long-Term Investment Value",
    description:
      "Red Sandalwood is one of the highest-value tree crops in India. We help you understand its market potential and plan for the best long-term returns.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Training & Workshops",
    description:
      "We organise regular farmer training sessions, workshops, and knowledge-sharing programmes so members always have access to updated, practical information.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Protection at Every Step",
    description:
      "From the day you plant your first seedling to the day you harvest, SRSGA ensures your rights are protected and your investment is secure.",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const comparisons = [
  { point: "Farming guidance",    with: "Step-by-step expert support",        without: "Trial and error, risky mistakes" },
  { point: "Legal process",       with: "Handled with full documentation",     without: "Confusing, time-consuming, risky" },
  { point: "Market access",       with: "Connected to buyers and price info",  without: "Uncertain pricing, middlemen" },
  { point: "Community",           with: "Network of trusted fellow farmers",   without: "Isolated, no support system" },
  { point: "Training",            with: "Workshops, videos, PDF guides",       without: "Limited access to knowledge" },
  { point: "Investment confidence", with: "Clear path with SRSGA backing",    without: "Uncertainty and hesitation" },
];

export default async function WhyChooseUsPage() {
  const data = await getWhyChooseUsPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[620px] flex items-end">
        <Image
          src="/assets/red10.webp"
          alt="Red Sandalwood Plantation"
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
              backgroundColor: "rgba(62,107,62,0.6)",
              color: "var(--color-almond-cream)",
              border: "1px solid rgba(243,229,216,0.25)",
            }}
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="6" r="5" opacity="0.4" />
              <circle cx="6" cy="6" r="2.5" />
            </svg>
            Why SRSGA
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
                style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" /><circle cx="6" cy="6" r="2.5" />
                </svg>
                Our Commitment
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.introTitle}
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            {data.introBody.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "rgba(58,47,47,0.82)" }}>
                {para}
              </p>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/red5.webp"
              alt="Farmers at work"
              width={720}
              height={560}
              className="w-full h-[480px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── 6 Reasons Grid ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" /><circle cx="6" cy="6" r="2.5" />
                </svg>
                What We Offer
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.reasonsTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(58,47,47,0.7)" }}>
              Everything we offer is designed around what farmers actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.reasons.slice(0, 6).map((reason, i) => {
              const staticReason = reasons[i] ?? reasons[0];
              return (
              <div
                key={reason.title}
                className="rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: staticReason.bg }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "white", color: staticReason.accent, border: `1px solid ${staticReason.accent}30` }}
                >
                  {staticReason.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: staticReason.accent, opacity: 0.7 }}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: `${staticReason.accent}30` }} />
                </div>
                <h3
                  className="text-base font-extrabold mb-2"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.75)" }}>
                  {reason.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quote Banner ── */}
      <section className="relative isolate overflow-hidden min-h-[400px] flex items-center">
        <Image
          src="/assets/red8.webp"
          alt="Plantation rows"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(107,31,26,0.35) 0%, transparent 60%)" }}
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
            {data.quoteText}
          </p>
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(243,229,216,0.6)" }}
          >
            — SRSGA Founding Members
          </p>
        </div>
      </section>

      {/* ── With vs Without Comparison ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              >
                The Difference
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.comparisonTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(58,47,47,0.7)" }}>
              See the difference that the right support makes for a Red Sandalwood farmer.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
            {/* Table header */}
            <div
              className="grid grid-cols-3"
              style={{ backgroundColor: "var(--color-deep-mocha)" }}
            >
              <div
                className="px-5 py-4 text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(243,229,216,0.5)" }}
              >
                Area
              </div>
              <div
                className="px-5 py-4 font-extrabold text-center text-sm border-l"
                style={{ color: "var(--color-almond-cream)", borderColor: "rgba(243,229,216,0.1)" }}
              >
                <span style={{ color: "#a8d4a8" }}>✓</span> With SRSGA
              </div>
              <div
                className="px-5 py-4 font-extrabold text-center text-sm border-l"
                style={{ color: "rgba(243,229,216,0.45)", borderColor: "rgba(243,229,216,0.1)" }}
              >
                ✗ Without SRSGA
              </div>
            </div>

            {data.comparisonRows.map((row, i) => (
              <div
                key={row.aspect}
                className="grid grid-cols-3 border-t"
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--color-almond-cream)" : "var(--color-almond-cream-2)",
                  borderColor: "rgba(58,47,47,0.08)",
                }}
              >
                <div
                  className="px-5 py-4 text-sm font-extrabold"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  {row.aspect}
                </div>
                <div
                  className="px-5 py-4 text-sm border-l flex items-start gap-2"
                  style={{ borderColor: "rgba(58,47,47,0.08)", color: "rgba(58,47,47,0.82)" }}
                >
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: "var(--color-hunter-green)" }}>✓</span>
                  {row.withSrsga}
                </div>
                <div
                  className="px-5 py-4 text-sm border-l flex items-start gap-2"
                  style={{ borderColor: "rgba(58,47,47,0.08)", color: "rgba(58,47,47,0.45)" }}
                >
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: "var(--color-dark-wine)" }}>✗</span>
                  {row.alone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Support You ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/red1.webp"
              alt="Young Red Sandalwood plantation"
              width={720}
              height={600}
              className="w-full h-[500px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" /><circle cx="6" cy="6" r="2.5" />
                </svg>
                Step by Step
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.supportTitle}
            </h2>

            <div className="flex gap-2 mb-8">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            <div className="flex flex-col gap-5">
              {data.supportSteps.slice(0, 5).map((step, i) => {
                const accents = ["var(--color-hunter-green)", "var(--color-olive-wood)", "var(--color-dark-wine)", "var(--color-hunter-green)", "var(--color-olive-wood)"];
                const item = { step: `0${i + 1}`, title: step.title, desc: step.description, accent: accents[i] };
                return (
                <div key={item.step} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0"
                    style={{ backgroundColor: item.accent, color: "var(--color-almond-cream)" }}
                  >
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h4
                      className="font-extrabold text-sm mb-1"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.75)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section
        className="px-4 sm:px-8 lg:px-16 py-0"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] items-stretch">
            <div
              className="flex items-center justify-center px-8 py-6"
              style={{ backgroundColor: "var(--color-hunter-green)" }}
            >
              <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="px-8 py-6" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: "rgba(243,229,216,0.55)" }}
              >
                Our Promise
              </p>
              <p
                className="text-base sm:text-lg font-semibold leading-relaxed"
                style={{ color: "var(--color-almond-cream)" }}
              >
                We stand beside every farmer — from the{" "}
                <span style={{ color: "#a8d4a8" }}>first seed</span> to the{" "}
                <span style={{ color: "#f0d4a8" }}>final harvest</span> — with
                guidance, legal protection, and a community that grows{" "}
                <span style={{ color: "#f9edd8" }}>stronger together.</span>
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
          style={{ background: "linear-gradient(160deg, rgba(62,107,62,0.3) 0%, transparent 60%)" }}
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
            Get Started
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            Ready to Grow with Confidence?
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
            Join SRSGA today and get access to expert guidance, legal support,
            and a community of farmers who are building a better future — one
            tree at a time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/join-now"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold shadow-xl transition hover:opacity-90"
              style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
            >
              Join SRSGA Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border px-10 py-4 text-base font-bold transition hover:opacity-80"
              style={{ borderColor: "rgba(243,229,216,0.5)", color: "var(--color-almond-cream)" }}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
