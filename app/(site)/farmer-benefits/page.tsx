import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFarmerBenefitsPageData } from "@/lib/sanity/queries/farmerBenefits";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFarmerBenefitsPageData();
  return {
    title: data.seo?.metaTitle ?? "Farmer Benefits – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Explore the benefits available to Red Sandalwood farmers who are members of SRSGA — guidance, legal support, training, and more.",
  };
}

const benefits = [
  {
    title: "Free Farming Guidance",
    description:
      "Every SRSGA member gets access to expert guidance on soil preparation, planting techniques, irrigation, maintenance, and harvesting — completely free of charge.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" />
        <path d="M12 13C9.5 10.5 6 9.5 3 10.5c0 4 3.5 6.5 9 4.5" />
        <path d="M12 13c2.5-2.5 6-3.5 9-2.5 0 4-3.5 6.5-9 4.5" />
      </svg>
    ),
  },
  {
    title: "Legal Documentation Support",
    description:
      "We assist members with all required forest department registrations, land documentation, and permits needed to legally grow, harvest, and transport Red Sandalwood.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Training Workshops",
    description:
      "Regular in-person workshops, online sessions, and PDF guides keep members updated on the latest farming techniques, regulations, and market trends.",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Member Network Access",
    description:
      "Join a trusted community of hundreds of fellow Red Sandalwood farmers across Andhra Pradesh. Share knowledge, get advice, and grow together.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
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
    title: "Market Price Information",
    description:
      "Members receive regular updates on Red Sandalwood timber prices, export market news, and buyer connections to help them get the best value for their harvest.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Land Suitability Assessment",
    description:
      "Our team will assess your land to determine its suitability for Red Sandalwood cultivation and recommend the best approach for your specific conditions.",
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    title: "Finance & Loan Guidance",
    description:
      "We help members understand government agricultural loan schemes, subsidies, and financial support programmes available for Red Sandalwood plantation projects.",
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Dedicated Member Support",
    description:
      "A dedicated helpline and support team is available to answer member queries, resolve issues, and provide guidance at any stage of your farming journey.",
    accent: "var(--color-dark-wine)",
    bg: "rgba(107,31,26,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default async function FarmerBenefitsPage() {
  const data = await getFarmerBenefitsPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[620px] flex items-end">
        <Image
          src="/assets/red8.webp"
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
            Member Benefits
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
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Full Support
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

            {/* Quick stat row */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "8+", label: "Benefits Included", color: "var(--color-hunter-green)" },
                { value: "500+", label: "Active Members", color: "var(--color-dark-wine)" },
                { value: "100%", label: "Legal Compliance", color: "var(--color-olive-wood)" },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="rounded-xl px-4 py-5 text-center border border-black/5 shadow-sm"
                  style={{ backgroundColor: "white" }}
                >
                  <p className="text-2xl font-extrabold" style={{ color }}>{value}</p>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-wider mt-1"
                    style={{ color: "var(--color-deep-mocha)", opacity: 0.65 }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/red5.webp"
              alt="Farmers at work"
              width={720}
              height={560}
              className="w-full h-[460px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
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
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                What You Get
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.benefitsTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(58,47,47,0.7)" }}>
              8 core benefits that every SRSGA member can access from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.benefits.slice(0, 8).map((benefit, i) => {
              const staticB = benefits[i] ?? benefits[0];
              return (
              <div
                key={benefit.title}
                className="rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: staticB.bg }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "white", color: staticB.accent, border: `1px solid ${staticB.accent}30` }}
                  >
                    {staticB.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: staticB.accent, opacity: 0.55 }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div
                  className="w-8 h-0.5 rounded-full mb-3"
                  style={{ backgroundColor: staticB.accent, opacity: 0.4 }}
                />
                <h3
                  className="text-sm font-extrabold mb-2 leading-snug"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(58,47,47,0.72)" }}
                >
                  {benefit.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Image Showcase Strip ── */}
      <section
        className="py-14 px-4 sm:px-8 lg:px-14"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1.1fr_1.1fr] gap-4">
          {/* Col 1 — tall single image spanning 2 rows */}
          <div className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[320px] md:min-h-0">
            <Image
              src="/assets/red11.webp"
              alt="Red sandalwood farmer"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Col 2 row 1 */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/red12.webp"
              alt="Sandalwood plantation"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>

          {/* Col 3 row 1 */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/red13.webp"
              alt="Sandalwood farm care"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>

          {/* Col 2 row 2 — text card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-center"
            style={{ backgroundColor: "var(--color-almond-cream-2)" }}
          >
            <h3
              className="text-base font-extrabold mb-3 leading-snug"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              From Seed to Sale — We're With You
            </h3>
            <ul className="space-y-2.5">
              {[
                "Sapling selection & soil testing",
                "12-year free maintenance & security",
                "Full legal documentation support",
                "Market linkage & harvest planning",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="rgba(62,107,62,0.2)" stroke="var(--color-hunter-green)" strokeWidth="1" />
                    <path d="M4 7l2 2 4-4" stroke="var(--color-hunter-green)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="text-xs font-medium leading-snug"
                    style={{ color: "rgba(58,47,47,0.82)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 row 2 */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/red14.webp"
              alt="Harvest and value"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Stats / Highlight Banner ── */}
      <section className="relative isolate overflow-hidden py-20 px-4" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
        <Image
          src="/assets/red9.webp"
          alt="Plantation aerial"
          fill
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: "rgba(243,229,216,0.55)" }}
            >
              By the Numbers
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: "var(--color-almond-cream)" }}
            >
              The SRSGA Difference
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="var(--color-olive-wood)" />
                <circle cx="8" cy="8" r="6" stroke="var(--color-olive-wood)" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
              <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.stats.slice(0, 4).map((s, i) => {
              const accents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)", "var(--color-hunter-green)"];
              return { number: s.value, label: s.label, accent: accents[i % accents.length] };
            }).map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl px-5 py-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(243,229,216,0.12)",
                }}
              >
                <p
                  className="text-4xl sm:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-almond-cream)" }}
                >
                  {stat.number}
                </p>
                <div
                  className="w-8 h-0.5 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: stat.accent }}
                />
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(243,229,216,0.6)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section
        className="px-4 sm:px-8 lg:px-16 py-16"
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
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: "rgba(243,229,216,0.55)" }}
              >
                Our Commitment to Members
              </p>
              <p
                className="text-base sm:text-lg font-semibold leading-relaxed"
                style={{ color: "var(--color-almond-cream)" }}
              >
                Every benefit is{" "}
                <span style={{ color: "#a8d4a8" }}>free for members</span>,{" "}
                available from{" "}
                <span style={{ color: "#f0d4a8" }}>day one</span>, and backed by
                a team that is genuinely committed to your{" "}
                <span style={{ color: "#f9edd8" }}>long-term success.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <Image
          src="/assets/red10.webp"
          alt="Plantation walkway"
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
            Join Today
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            Start Benefiting Today
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
            Join SRSGA and immediately gain access to all member benefits — no
            delays, no complications. Just full support from day one.
          </p>
          <Link
            href="/join-now"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold shadow-xl transition hover:opacity-90"
            style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
          >
            Join SRSGA Now
          </Link>
        </div>
      </section>
    </>
  );
}
