import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getHelpSupportPageData } from "@/lib/sanity/queries/helpSupport";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHelpSupportPageData();
  return {
    title: data.seo?.metaTitle ?? "Help & Support – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Get help and support from SRSGA for all your Red Sandalwood farming questions — from planting to legal guidance.",
  };
}

const supportCategories = [
  {
    title: "Farming Support",
    description: "Questions about soil, seedlings, planting, irrigation, or maintenance.",
    topics: ["Soil preparation", "Seedling care", "Watering schedule", "Pest control", "Pruning tips"],
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
    title: "Legal Support",
    description: "Help with forest department rules, permits, registrations, and compliance.",
    topics: ["Land registration", "Forest dept. NOC", "Harvest permits", "Transport documents", "Legal FAQs"],
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
    title: "Finance Support",
    description: "Guidance on agricultural loans, subsidies, and government schemes.",
    topics: ["Loan eligibility", "Govt. subsidies", "Bank liaison", "Investment planning", "ROI estimates"],
    accent: "var(--color-olive-wood)",
    bg: "rgba(139,90,43,0.07)",
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
    title: "Market Support",
    description: "Information on timber pricing, buyers, and export opportunities.",
    topics: ["Current timber prices", "Buyer connections", "Export process", "Market trends", "Valuation help"],
    accent: "var(--color-hunter-green)",
    bg: "rgba(62,107,62,0.07)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How do I contact SRSGA for support?",
    a: "You can reach us via phone, email, or by filling the contact form on this page. Our support team is available Monday to Saturday, 9 AM to 6 PM.",
  },
  {
    q: "Is support available in Telugu?",
    a: "Yes. Our support team speaks both Telugu and English. You can communicate in whichever language is comfortable for you.",
  },
  {
    q: "How quickly will I get a response?",
    a: "We aim to respond to all queries within 24 hours on working days. Urgent issues related to legal compliance are prioritised.",
  },
  {
    q: "Can non-members get support?",
    a: "We provide basic information to all visitors. Full support including legal guidance, farm visits, and dedicated assistance is available to registered SRSGA members.",
  },
  {
    q: "Do you offer on-site farm visits?",
    a: "Yes. For members, we can arrange on-site visits by our agricultural experts to assess your land, review your plantation, and provide hands-on guidance.",
  },
];

export default async function HelpSupportPage() {
  const data = await getHelpSupportPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[620px] flex items-end">
        <Image
          src="/assets/red6.webp"
          alt="Farmers planting Red Sandalwood"
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
            We Are Here For You
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
                Always Available
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              No Question Is{" "}
              <span style={{ color: "var(--color-hunter-green)" }}>Too Small</span>
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(58,47,47,0.82)" }}>
              Red Sandalwood farming involves many decisions — from choosing the
              right land and seedlings, to navigating government rules and finding
              the right market. None of this should feel overwhelming.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(58,47,47,0.82)" }}>
              Our support team is made up of experienced farmers, legal advisors,
              and agricultural experts who understand your challenges first-hand.
              We speak your language — literally and practically.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(58,47,47,0.82)" }}>
              Whether you are just starting out or are mid-way through your
              plantation journey, reach out anytime. We will guide you forward.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "Mon–Sat", label: "Support Hours", color: "var(--color-hunter-green)" },
                { value: "24 hrs", label: "Response Time", color: "var(--color-dark-wine)" },
                { value: "Telugu", label: "& English Support", color: "var(--color-olive-wood)" },
                { value: "Free", label: "For All Members", color: "var(--color-hunter-green)" },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="rounded-xl px-4 py-4 border border-black/5 shadow-sm"
                  style={{ backgroundColor: "white" }}
                >
                  <p className="text-lg font-extrabold" style={{ color }}>{value}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: "var(--color-deep-mocha)", opacity: 0.6 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unsplash: Indian farmer receiving consultation */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&fit=crop&q=80"
              alt="Farmer receiving support and guidance"
              width={720}
              height={560}
              className="w-full h-[480px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Support Categories ── */}
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
                Support Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-deep-mocha)" }}>
              How Can We Help You?
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(58,47,47,0.7)" }}>
              We offer support across four key areas that matter most to Red Sandalwood farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: cat.bg }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "white", color: cat.accent, border: `1px solid ${cat.accent}30` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold mb-1" style={{ color: "var(--color-deep-mocha)" }}>
                      {cat.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.72)" }}>
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="w-full h-px mb-4" style={{ backgroundColor: `${cat.accent}25` }} />
                <ul className="grid grid-cols-2 gap-2">
                  {cat.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(58,47,47,0.8)" }}>
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6.5" fill="rgba(62,107,62,0.15)" stroke={cat.accent === "var(--color-hunter-green)" ? "#3E6B3E" : cat.accent === "var(--color-dark-wine)" ? "#6B1F1A" : "#8B5A2B"} strokeWidth="1" />
                        <path d="M4 7l2 2 4-4" stroke={cat.accent === "var(--color-hunter-green)" ? "#3E6B3E" : cat.accent === "var(--color-dark-wine)" ? "#6B1F1A" : "#8B5A2B"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to Reach Us ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              >
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-deep-mocha)" }}>
              Ways to Reach Us
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p className="text-base" style={{ color: "rgba(58,47,47,0.7)" }}>
              Choose whichever way works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.contactMethods.slice(0, 3).map((m, i) => {
              const accents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)"];
              const bgs = ["rgba(62,107,62,0.07)", "rgba(107,31,26,0.07)", "rgba(139,90,43,0.07)"];
              const images = [
                "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&fit=crop&q=80",
              ];
              const imageAlts = ["Support phone call", "Email support", "SRSGA office"];
              const accent = accents[i % accents.length];
              const bg = bgs[i % bgs.length];
              return (
                <div
                  key={m.title}
                  className="rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-44">
                    <Image
                      src={images[i % images.length]}
                      alt={imageAlts[i % imageAlts.length]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div
                      className="absolute bottom-3 left-4 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: accent, color: "white" }}
                    >
                      {i === 0 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      )}
                      {i >= 2 && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6" style={{ backgroundColor: bg }}>
                    <h3 className="text-base font-extrabold mb-1" style={{ color: "var(--color-deep-mocha)" }}>
                      {m.title}
                    </h3>
                    <p className="text-sm font-bold mb-0.5" style={{ color: accent }}>{m.value}</p>
                    <p className="text-xs" style={{ color: "rgba(58,47,47,0.6)" }}>{m.availability}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full-width Quote Break ── */}
      <section className="relative isolate overflow-hidden min-h-[400px] flex items-center">
        <Image
          src="/assets/help1.webp"
          alt="Farming community"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(62,107,62,0.35) 0%, transparent 60%)" }}
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
            &ldquo;No farmer should ever feel stuck or unsupported. That is exactly why our helpline exists.&rdquo;
          </p>
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(243,229,216,0.6)" }}
          >
            — SRSGA Support Team
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-4xl mx-auto">
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
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-deep-mocha)" }}>
              Common Support Questions
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden border border-black/5"
                style={{ backgroundColor: "var(--color-almond-cream)" }}
              >
                <summary
                  className="flex items-center justify-between px-7 py-5 cursor-pointer list-none gap-4 hover:opacity-90 transition-opacity"
                >
                  <span
                    className="font-extrabold text-sm leading-snug"
                    style={{ color: "var(--color-deep-mocha)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg font-light transition-all group-open:text-white"
                    style={{
                      borderColor: "rgba(58,47,47,0.2)",
                      color: "var(--color-deep-mocha)",
                    }}
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block" style={{ color: "var(--color-dark-wine)" }}>−</span>
                  </span>
                </summary>
                <div
                  className="px-7 pb-6 pt-2 text-sm leading-relaxed border-t"
                  style={{
                    color: "rgba(58,47,47,0.78)",
                    borderColor: "rgba(58,47,47,0.08)",
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: context + Unsplash image */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
              >
                Send a Message
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107,31,26,0.2)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              Still Have Questions?{" "}
              <span style={{ color: "var(--color-dark-wine)" }}>Ask Us Directly</span>
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(58,47,47,0.82)" }}>
              Fill in the form and our support team will get back to you within
              24 hours. For urgent matters, please call us directly.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&fit=crop&q=80"
                alt="SRSGA team ready to help farmers"
                width={720}
                height={340}
                className="w-full h-[280px] object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="px-6 py-5"
                style={{ backgroundColor: "var(--color-deep-mocha)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-1"
                  style={{ color: "rgba(243,229,216,0.5)" }}
                >
                  Our Promise
                </p>
                <p
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: "var(--color-almond-cream)" }}
                >
                  Every query gets a{" "}
                  <span style={{ color: "#a8d4a8" }}>real response</span> from
                  our team — no automated bots, no long waits.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-2xl p-8 border border-black/5 shadow-sm"
            style={{ backgroundColor: "var(--color-almond-cream-2)" }}
          >
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-deep-mocha)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                    style={{
                      backgroundColor: "var(--color-almond-cream)",
                      color: "var(--color-deep-mocha)",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-deep-mocha)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                    style={{
                      backgroundColor: "var(--color-almond-cream)",
                      color: "var(--color-deep-mocha)",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  Support Category
                </label>
                <select
                  className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                  style={{
                    backgroundColor: "var(--color-almond-cream)",
                    color: "var(--color-deep-mocha)",
                  }}
                >
                  <option>Farming Support</option>
                  <option>Legal Support</option>
                  <option>Finance Support</option>
                  <option>Market Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  Your Question
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your question or issue..."
                  className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition resize-none"
                  style={{
                    backgroundColor: "var(--color-almond-cream)",
                    color: "var(--color-deep-mocha)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-3.5 font-bold text-sm transition hover:opacity-90 shadow-lg"
                style={{
                  backgroundColor: "var(--color-dark-wine)",
                  color: "var(--color-almond-cream)",
                }}
              >
                Submit Request
              </button>
            </form>
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
              style={{ backgroundColor: "var(--color-hunter-green)" }}
            >
              <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="px-8 py-6" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(243,229,216,0.55)" }}>
                Our Support Promise
              </p>
              <p className="text-base sm:text-lg font-semibold leading-relaxed" style={{ color: "var(--color-almond-cream)" }}>
                Speak to us in{" "}
                <span style={{ color: "#a8d4a8" }}>Telugu or English</span> —
                our team is available{" "}
                <span style={{ color: "#f0d4a8" }}>Monday to Saturday</span>{" "}
                and responds to every query with{" "}
                <span style={{ color: "#f9edd8" }}>genuine care and speed.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative isolate overflow-hidden py-24 px-4 mt-16">
        <Image
          src="/assets/red7.webp"
          alt="Red Sandalwood forest"
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
            Become a Member
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            Ready for Full Support?
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
            Join SRSGA as a member and unlock dedicated support, legal guidance,
            expert farming assistance, and a community that grows with you.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
