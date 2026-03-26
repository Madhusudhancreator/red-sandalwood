import Link from "next/link";
import Image from "next/image";
import type { HomePageData } from "@/lib/sanity/queries/home";
import type { AssociationMember } from "@/lib/sanity/queries/members";
import type { NewsArticle } from "@/lib/sanity/queries/newsArticles";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { urlFor } from "@/lib/sanity/image";
import { HomeContactSection } from "./HomeContactSection";

function imageUrl(source: unknown, width: number, height: number) {
  if (!source) return null;
  try {
    return urlFor(source).width(width).height(height).fit("crop").url();
  } catch {
    return null;
  }
}

function CtaButton({ href, label, variant = "primary" }: { href?: string; label?: string; variant?: "primary" | "secondary" }) {
  if (!href || !label) return null;

  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-sandalwood-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sandalwood-700"
      : "inline-flex items-center justify-center rounded-full border border-forest-900/15 bg-white px-6 py-3 text-sm font-semibold text-forest-900 transition hover:border-sandalwood-300 hover:text-sandalwood-700";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

const associationIcons = ["🌿", "🤝", "⚖️", "🧭"];
const treeValueIcons = ["🌳", "🏡", "📍", "📈"];
const benefitIcons = ["🪴", "🧑‍🌾", "🤝", "⚖️", "📘", "➡️"];
const supportIcons = ["🧑‍🌾", "🪴", "📞", "🌱"];
const legalIcons = ["📄", "⚖️", "✅", "🧾"];
const timelineFallbackImages = [
  "/assets/steps/1.png",
  "/assets/steps/2.png",
  "/assets/steps/3.png",
  "/assets/steps/4.png",
  "/assets/steps/5.png",
];

export function HomePageContent({
  data,
  members = [],
  newsArticles = [],
}: {
  data: HomePageData;
  members?: AssociationMember[];
  newsArticles?: NewsArticle[];
}) {
  const comparisonFallbackImages = ["/assets/red 8.png", "/assets/red 17.png"];
  const historyImage = imageUrl(data.historyImage, 1200, 900) ?? "/assets/red 6.png";

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex items-center min-h-[600px] lg:min-h-[1000px] overflow-hidden">
        <Image
          src="/assets/banner_one.webp"
          alt="Red sandalwood plantation"
          fill
          priority
          className=" object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="relative px-6 sm:px-10 lg:px-20 max-w-2xl">
          <h1
            style={{ color: "var(--color-almond-cream)", lineHeight: "1.1" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            {data.heroTitle}
          </h1>
          <p
            style={{ color: "rgba(243,229,216,0.85)" }}
            className="mt-5 text-lg sm:text-xl leading-relaxed drop-shadow"
          >
            {data.heroSubtitle}
          </p>
          <div className="mt-8">
            <Link
              href={data.heroPrimaryCta.href ?? "/join-now"}
              style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold shadow-xl transition hover:opacity-90"
            >
              {data.heroPrimaryCta.label ?? "Join Now"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-12 px-4 sm:px-8 lg:px-16 bg-[#f7f9f7]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "High Quality Sapling Supply",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#3E6B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-7" />
                  <path d="M9 15c0-3-3-5-6-4 0 3 2.5 5.5 6 5" />
                  <path d="M15 15c0-3 3-5 6-4 0 3-2.5 5.5-6 5" />
                  <path d="M12 15c0-4-2-7-5-8 0 4 2 7 5 8" />
                  <path d="M12 15c0-4 2-7 5-8 0 4-2 7-5 8" />
                </svg>
              ),
            },
            {
              label: "Soil & Site Suitability Check",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#3E6B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6l4-2 4 2 4-2 4 2v13l-4-2-4 2-4-2-4 2V6z" />
                  <line x1="7" y1="4" x2="7" y2="19" />
                  <line x1="11" y1="6" x2="11" y2="21" />
                  <line x1="15" y1="4" x2="15" y2="19" />
                </svg>
              ),
            },
            {
              label: "Expert Plantation Planning",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#3E6B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="7" y1="14" x2="17" y2="14" />
                  <line x1="7" y1="18" x2="13" y2="18" />
                </svg>
              ),
            },
            {
              label: "12 Years FREE Maintenance",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#3E6B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              ),
            },
          ].map(({ label, icon }) => (
            <div key={label} className="bg-white rounded-2xl flex flex-col items-center text-center px-4 py-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(62,107,62,0.10)" }}>
                <div className="w-9 h-9">{icon}</div>
              </div>
              <p className="text-sm font-semibold leading-snug" style={{ color: "var(--color-deep-mocha)" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Split Section: Sandalwood | Red Sandalwood ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — Sandalwood */}
        <div className="relative flex flex-col justify-end overflow-hidden min-h-[580px]">
          <Image
            src="/assets/sandelwood.webp"
            alt="Sandalwood plantation"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          {/* Multi-layer overlay for strong text visibility */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(62,107,62,0.35) 0%, transparent 60%)" }} />

          <div className="relative px-8 sm:px-10 pb-10 pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              A Safe and Valuable<br />
              <span style={{ color: "var(--color-almond-cream)" }}>Long-Term Investment</span>
            </h2>

            <div className="w-12 h-[3px] rounded-full my-4" style={{ backgroundColor: "var(--color-hunter-green)" }} />

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-almond-cream)" }}>
              Why Grow Sandalwood?
            </h3>
            <p className="text-sm leading-relaxed text-white/85">
              Sandalwood has very high demand in India and abroad. It is used in
              perfumes, medicine, pooja items, and cosmetics. The price increases
              over time — making it a strong long-term asset for farmers.
            </p>

            <div className="mt-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-almond-cream)" }}>
                Growing Duration
              </span>
              <p className="text-sm text-white/80 mt-1">
                12 to 15 years to mature for good returns.
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {[
                "High market value",
                "Strong export demand",
                "Government-supported cultivation",
                "Long-term wealth creation",
                "Low maintenance after early stage",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="rgba(62,107,62,0.4)" stroke="#3E6B3E" strokeWidth="1"/>
                    <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs font-semibold text-white/90">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Red Sandalwood */}
        <div className="relative flex flex-col justify-end overflow-hidden min-h-[580px]">
          <Image
            src="/assets/red_sandelwood.webp"
            alt="Red Sandalwood"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          {/* Multi-layer overlay for strong text visibility */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(107,31,26,0.4) 0%, transparent 60%)" }} />

          <div className="relative px-8 sm:px-10 pb-10 pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              A Safe and Valuable<br />
              <span style={{ color: "var(--color-almond-cream)" }}>Long-Term Investment</span>
            </h2>

            <div className="w-12 h-[3px] rounded-full my-4" style={{ backgroundColor: "var(--color-dark-wine)" }} />

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-almond-cream)" }}>
              Why Grow Red Sandalwood?
            </h3>
            <p className="text-sm leading-relaxed text-white/85">
              Red Sandalwood is one of India's rarest and most protected trees,
              native only to Andhra Pradesh. Its timber is globally exported and
              its value rises every year — a legacy investment for your family.
            </p>

            <div className="mt-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-almond-cream)" }}>
                Growing Duration
              </span>
              <p className="text-sm text-white/80 mt-1">
                12 to 15 years to mature for good returns.
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {[
                "High market value",
                "Strong export demand",
                "Government-supported cultivation",
                "Long-term wealth creation",
                "Low maintenance after early stage",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="rgba(107,31,26,0.4)" stroke="#6B1F1A" strokeWidth="1"/>
                    <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs font-semibold text-white/90">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* ── Guiding Farmers Section ── */}
      <section className="py-14 px-4 sm:px-8 lg:px-14" style={{ backgroundColor: "var(--color-almond-cream-2)" }}>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: "var(--color-deep-mocha)" }}>
            Guiding Farmers to Success
          </h2>
        </div>

        {/* 3-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.1fr_1.1fr] gap-4">

          {/* Col 1 — tall single image (spans 2 rows) */}
          <div className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[320px] md:min-h-0">
            <Image
              src="/assets/help2.webp"
              alt="Farmer guidance"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Col 2 row 1 — image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/help4.webp"
              alt="Plantation support"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>

          {/* Col 3 row 1 — image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/help3.webp"
              alt="Sandalwood farm"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>

          {/* Col 2 row 2 — text content */}
          <div className="rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-extrabold text-black mb-3 leading-snug">
              From Seed to Sale We're With You
            </h3>
            <div className="w-8 h-[2px] rounded-full mb-4" />
            <ul className="space-y-3">
              {[
                {text: "Sapling selection & soil testing" },
                {text: "12-year free maintenance & security" },
                {text: "Full legal documentation support" },
                {text: "Market linkage & harvest planning" },
              ].map(({ text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <span className="text-sm font-medium leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 row 2 — image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src="/assets/help5.webp"
              alt="Harvest success"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>

        </div>
      </section>

      {/* ── About SRSGA ── */}
      <section style={{ backgroundColor: "var(--color-almond-cream)" }} className="py-20 px-4 sm:px-8 lg:px-16">
        <div>

          {/* Section badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="5" opacity="0.4"/><circle cx="6" cy="6" r="2.5"/>
              </svg>
              About SRSGA
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
          </div>

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">

            {/* ── Left: Title + intro + decorative ── */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08]" style={{ color: "var(--color-deep-mocha)" }}>
                Stronger Together.<br />
                <span style={{ color: "var(--color-hunter-green)" }}>Growing for</span>{" "}
                <span style={{ color: "var(--color-dark-wine)" }}>the Future.</span>
              </h2>

              <div className="flex gap-2 mt-5 mb-6">
                <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
                <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
                <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
              </div>

              <p className="text-base leading-relaxed" style={{ color: "rgba(58,47,47,0.82)" }}>
                The Sandalwood and Red Sanders Growers Association <strong style={{ color: "var(--color-deep-mocha)" }}>(SRSGA)</strong> is
                formed to support and guide farmers who are interested in cultivating high-value trees like
                Sandalwood and Red Sandalwood. Our goal is to help farmers grow <em>safely, legally, and profitably.</em>
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { value: "12+", label: "Years Support", color: "var(--color-hunter-green)" },
                  { value: "100%", label: "Legal Guidance", color: "var(--color-dark-wine)" },
                  { value: "AP", label: "Andhra Pradesh", color: "var(--color-olive-wood)" },
                ].map(({ value, label, color }) => (
                  <div key={label} className="rounded-xl px-4 py-5 text-center bg-white shadow-sm border border-black/5">
                    <p className="text-2xl font-extrabold" style={{ color }}>{value}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--color-deep-mocha)", opacity: 0.7 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: 4 content cards ── */}
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Complete Plantation Guidance",
                  body: "We provide complete guidance from plantation planning to harvest. Our team assists farmers in selecting suitable land, choosing quality saplings, and following proper cultivation methods — ensuring the right direction at every stage.",
                  accent: "var(--color-hunter-green)",
                  bg: "rgba(62,107,62,0.07)",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22v-9"/><path d="M12 13C9.5 10.5 6 9.5 3 10.5c0 4 3.5 6.5 9 4.5"/>
                      <path d="M12 13c2.5-2.5 6-3.5 9-2.5 0 4-3.5 6.5-9 4.5"/>
                    </svg>
                  ),
                },
                {
                  num: "02",
                  title: "Legal Formalities & Documentation",
                  body: "We help farmers with all legal formalities — preparing required documents, registrations, and permissions related to Sandalwood and Red Sanders cultivation. Stay fully compliant with government regulations, without confusion.",
                  accent: "var(--color-dark-wine)",
                  bg: "rgba(107,31,26,0.07)",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  ),
                },
                {
                  num: "03",
                  title: "Government Schemes & Benefits",
                  body: "SRSGA connects farmers with government schemes, concessions, and applicable benefits. We assist in understanding available subsidies, approvals, and supply-related processes — making access easy at the right time.",
                  accent: "var(--color-olive-wood)",
                  bg: "rgba(139,90,43,0.07)",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
                    </svg>
                  ),
                },
              ].map(({ num, title, body, accent, bg, icon }) => (
                <div key={num} className="flex gap-4 rounded-2xl p-5 border border-black/5 shadow-sm" style={{ backgroundColor: bg }}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {/* <span className="text-[10px] font-bold tracking-widest" style={{ color: accent, opacity: 0.7 }}>{num}</span> */}
                      <h3 className="text-sm font-extrabold" style={{ color: "var(--color-deep-mocha)" }}>{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.75)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Mission Statement Banner ── */}
          <div className="mt-12 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[auto_1fr] items-stretch">
              <div className="flex items-center justify-center px-8 py-6" style={{ backgroundColor: "var(--color-dark-wine)" }}>
                <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="px-8 py-6" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(243,229,216,0.55)" }}>Our Mission</p>
                <p className="text-base sm:text-lg font-semibold leading-relaxed" style={{ color: "var(--color-almond-cream)" }}>
                  To create a <span style={{ color: "#a8d4a8" }}>secure</span>, <span style={{ color: "#f0d4a8" }}>organised</span>, and <span style={{ color: "#f9edd8" }}>supportive</span> environment
                  for farmers who want to build long-term wealth through Sandalwood and Red Sanders cultivation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Association Members ── */}
      <section className="py-16 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "var(--color-almond-cream-2)" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex-shrink-0"
              style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="5" opacity="0.4"/><circle cx="6" cy="6" r="2.5"/>
              </svg>
              Association Members
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.2)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {members.map((member, i) => {
              const accents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)"];
              const accent = accents[i % accents.length];
              const photoSrc = member.photoUrl ?? "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80";
              return (
              <div key={member._id} className="flex flex-col items-center text-center group">
                {/* Photo */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg mb-4 border-4"
                  style={{ borderColor: accent }}>
                  <Image
                    src={photoSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                {/* Accent dot */}
                <div className="w-6 h-1 rounded-full mb-3" style={{ backgroundColor: accent }} />
                {/* Name */}
                <p className="text-base font-extrabold leading-snug" style={{ color: "var(--color-deep-mocha)" }}>
                  {member.name}
                </p>
                {/* Designation */}
                <p className="text-xs font-semibold uppercase tracking-widest mt-1" style={{ color: accent }}>
                  {member.role}
                </p>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── World Map Section ── */}
      <section className="relative overflow-hidden min-h-[620px] flex items-center" style={{ backgroundColor: "var(--color-deep-mocha)" }}>

        {/* World map — full background, low opacity as texture */}
        <div className="absolute inset-0">
          <Image
            src="/assets/world_map.webp"
            alt="World map"
            fill
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
        </div>

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-20 py-16">
          <div className="max-w-5xl mx-auto">

            {/* Top badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.22em]"
                style={{ backgroundColor: "rgba(107,31,26,0.7)", color: "var(--color-almond-cream)", border: "1px solid rgba(243,229,216,0.25)" }}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Global Exclusivity
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: "var(--color-almond-cream)" }}>
              There is only <span style={{ color: "#a8d4a8" }}>one place</span> in the world<br className="hidden sm:block" />
              where we can cultivate.
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="var(--color-olive-wood)"/>
                <circle cx="8" cy="8" r="6" stroke="var(--color-olive-wood)" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
              <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
            </div>

            {/* Description block */}
            <p className="text-center text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
              style={{ color: "rgba(243,229,216,0.88)" }}>
              Sandalwood and Red Sandalwood can only be cultivated in{" "}
              <strong style={{ color: "#a8d4a8" }}>Andhra Pradesh</strong> and parts of{" "}
              <strong style={{ color: "#a8d4a8" }}>South India</strong>. The unique red soil,
              climate, and conditions found here cannot be replicated anywhere else on Earth.
              The entire world — from the Middle East to Europe, from Japan to the USA —
              depends on this one region to meet their demand.
            </p>

            {/* 3 stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  value: "Only AP",
                  label: "The sole origin on Earth",
                  accent: "var(--color-hunter-green)",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  value: "Global Demand",
                  label: "160+ countries are buyers",
                  accent: "var(--color-olive-wood)",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                    </svg>
                  ),
                  value: "Rising Value",
                  label: "Price grows every year",
                  accent: "var(--color-dark-wine)",
                },
              ].map(({ icon, value, label, accent }) => (
                <div key={value} className="flex flex-col items-center text-center rounded-2xl px-6 py-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(243,229,216,0.15)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "var(--color-almond-cream)" }}>
                    {icon}
                  </div>
                  <p className="text-lg font-extrabold mb-1" style={{ color: "var(--color-almond-cream)" }}>{value}</p>
                  <p className="text-xs font-medium" style={{ color: "rgba(243,229,216,0.6)" }}>{label}</p>
                  <div className="w-8 h-0.5 rounded-full mt-3" style={{ backgroundColor: accent }} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Growing Process ── */}
      <section className="py-20 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "var(--color-almond-cream-2)" }}>
        <div className="">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.28em] mb-3" style={{ color: "var(--color-hunter-green)" }}>
              From Seed to Timber
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-deep-mocha)" }}>
              How We Grow Sandalwood
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
          </div>

          {(() => {
            const steps = [
              { step: 1, label: "Select the Land",    sub: "Right soil, right location",        accent: "#3E6B3E" },
              { step: 2, label: "Plant the Sapling",  sub: "Quality seedlings, expert hands",   accent: "#8B5A2B" },
              { step: 3, label: "Nurture & Protect",  sub: "Care through every season",          accent: "#6B1F1A" },
              { step: 4, label: "Watch It Grow",      sub: "12–15 years of silent wealth",       accent: "#3E6B3E" },
              { step: 5, label: "Harvest & Profit",   sub: "Premium timber, maximum return",     accent: "#8B5A2B" },
            ];

            const Card = ({ step, label, sub, accent }: typeof steps[0]) => (
              <div className="group flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-black/5">
                {/* Image — tall */}
                <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>
                  <Image
                    src={`/assets/steps/${step}.png`}
                    alt={label}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Bottom gradient for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Step badge — bottom left of image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold text-white shadow-lg"
                      style={{ backgroundColor: accent }}>
                      {step}
                    </div>
                    <div className="h-[2px] w-10 rounded-full opacity-70" style={{ backgroundColor: accent }} />
                  </div>
                </div>
                {/* Text */}
                <div className="px-5 py-5">
                  <p className="text-base font-extrabold leading-snug" style={{ color: "var(--color-deep-mocha)" }}>{label}</p>
                  <p className="text-xs font-medium mt-1.5" style={{ color: "rgba(58,47,47,0.58)" }}>{sub}</p>
                </div>
              </div>
            );

            return (
              <>
                {/* Row 1 — 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                  {steps.slice(0, 3).map((s) => <Card key={s.step} {...s} />)}
                </div>
                {/* Row 2 — 2 cards centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:w-2/3 mx-auto">
                  {steps.slice(3).map((s) => <Card key={s.step} {...s} />)}
                </div>
              </>
            );
          })()}

        </div>
      </section>

      {/* ── In the News ── */}
      <section className="py-16 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "var(--color-almond-cream)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex-shrink-0"
              style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="5" opacity="0.4"/><circle cx="6" cy="6" r="2.5"/>
              </svg>
              In the News
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107,31,26,0.2)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => {
              const accents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)"];
              const accent = accents[i % accents.length];
              const imgSrc = (article as { imageUrl?: string | null }).imageUrl ?? "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&fit=crop&q=80";
              return (
              <div key={article._id} className="group rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                style={{ backgroundColor: "var(--color-almond-cream-2)" }}>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={imgSrc}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Tag pill */}
                  {article.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{ backgroundColor: accent, color: "var(--color-almond-cream)" }}>
                      {article.tag}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="px-5 py-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(58,47,47,0.45)" }}>
                    {article.publishedDate}
                  </p>
                  <h3 className="text-sm font-extrabold leading-snug mb-2"
                    style={{ color: "var(--color-deep-mocha)" }}>
                    {article.title}
                  </h3>
                  <p className="text-xs leading-relaxed flex-1"
                    style={{ color: "rgba(58,47,47,0.68)" }}>
                    {article.excerpt}
                  </p>
                  {/* <div className="flex items-center gap-1.5 mt-4">
                    {article.url ? (
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                        <span className="text-xs font-bold" style={{ color: accent }}>Read more</span>
                        <svg className="w-3 h-3" style={{ color: accent }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                      </a>
                    ) : (
                      <>
                        <span className="text-xs font-bold" style={{ color: accent }}>Read more</span>
                        <svg className="w-3 h-3" style={{ color: accent }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                      </>
                    )}
                  </div> */}
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      <HomeContactSection />
    </>
  );
}
