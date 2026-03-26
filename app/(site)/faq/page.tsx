import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFaqPageData } from "@/lib/sanity/queries/faq";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFaqPageData();
  return {
    title: data.seo?.metaTitle ?? "FAQ – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Frequently asked questions about Red Sandalwood farming, SRSGA membership, legal compliance, and more.",
  };
}

const categories = [
  {
    label: "About SRSGA",
    accent: "var(--color-hunter-green)",
    faqs: [
      {
        q: "What is SRSGA?",
        a: "SRSGA — the Sandalwood and Red Sanders Growers Association — is an organisation formed to support and guide farmers in Andhra Pradesh who want to grow Sandalwood and Red Sandalwood legally, safely, and profitably.",
      },
      {
        q: "Where is SRSGA based?",
        a: "SRSGA is based in Andhra Pradesh, India. We currently support farmers across 12+ districts in the state.",
      },
      {
        q: "Is SRSGA a government organisation?",
        a: "No. SRSGA is a private farmers' association. However, we work closely with the State Forest Department and government agricultural bodies to ensure our members benefit from all applicable schemes and remain fully compliant.",
      },
      {
        q: "How many members does SRSGA have?",
        a: "SRSGA currently has 500+ registered members across Andhra Pradesh, with new farmers joining every month.",
      },
    ],
  },
  {
    label: "Membership",
    accent: "var(--color-dark-wine)",
    faqs: [
      {
        q: "Who can join SRSGA?",
        a: "Any farmer or landowner in Andhra Pradesh who is interested in growing Red Sandalwood or Sandalwood on their private land can apply to join SRSGA.",
      },
      {
        q: "How do I become a member?",
        a: "You can apply through the Join Now page on our website or visit our office in person. Our team will review your application and get in touch within 2 working days.",
      },
      {
        q: "Is there a membership fee?",
        a: "Please contact our team directly for details on membership fees and what is included. All core support benefits — farming guidance, legal assistance, and training access — are provided to registered members.",
      },
      {
        q: "Can I join if my land is not in Andhra Pradesh?",
        a: "Currently, SRSGA focuses on supporting farmers within Andhra Pradesh, as Red Sandalwood is native to this region and its cultivation is governed by AP state laws.",
      },
    ],
  },
  {
    label: "Farming & Growing",
    accent: "var(--color-olive-wood)",
    faqs: [
      {
        q: "Is Red Sandalwood legal to grow on private land?",
        a: "Yes. Red Sandalwood can be legally grown on private agricultural land in Andhra Pradesh. However, there are registration and documentation requirements that must be followed — SRSGA guides you through all of them.",
      },
      {
        q: "How long does it take for Red Sandalwood to mature?",
        a: "Red Sandalwood typically takes 15 to 20 years to reach full commercial maturity. The trees grow slowly but produce extremely high-value timber that appreciates significantly over time.",
      },
      {
        q: "What kind of land is suitable for Red Sandalwood?",
        a: "Red Sandalwood grows best in well-drained, rocky or gravelly red soils typical of the Eastern Ghats region of Andhra Pradesh. SRSGA offers a free land suitability assessment for prospective members.",
      },
      {
        q: "Do I need to water the trees every day?",
        a: "Young saplings require regular watering in the first 1–2 years. Once established, Red Sandalwood trees are relatively drought-tolerant and require less intensive maintenance. Our farming guidance team will advise you on the correct schedule.",
      },
      {
        q: "What is the market value of Red Sandalwood?",
        a: "Red Sandalwood is one of the most valuable timber species in India. Prices vary based on quality and market conditions but have consistently increased over the years. SRSGA provides members with regular market price updates.",
      },
    ],
  },
  {
    label: "Legal & Compliance",
    accent: "var(--color-hunter-green)",
    faqs: [
      {
        q: "Do I need to register my plantation?",
        a: "Yes. You must register your Red Sandalwood plantation with the local Mandal or Divisional Forest Officer. This protects your ownership rights and is a required step before any harvesting or transport can take place.",
      },
      {
        q: "Can I sell Red Sandalwood freely?",
        a: "You can sell Red Sandalwood legally, but you must have the correct harvest permits, transit documentation, and sale records in place. SRSGA guides members through every step of the legal sale process.",
      },
      {
        q: "What happens if I grow Red Sandalwood without registration?",
        a: "Unregistered cultivation can lead to legal complications including confiscation of timber, fines, or difficulty obtaining harvest permits later. SRSGA strongly advises all farmers to register from the very beginning.",
      },
      {
        q: "Does SRSGA help with forest department paperwork?",
        a: "Yes. Document preparation, department liaison, and compliance support are core services SRSGA provides to all registered members.",
      },
    ],
  },
];

export default async function FaqPage() {
  const data = await getFaqPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[460px] flex items-end">
        <Image
          src="/assets/red3.webp"
          alt="Red Sandalwood plantation"
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
            Got Questions?
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

      {/* ── FAQ Categories ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {data.categories.map((cat, ci) => {
            const accentColors = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)", "var(--color-hunter-green)"];
            const accentBgs = ["rgba(62,107,62,0.12)", "rgba(107,31,26,0.1)", "rgba(139,90,43,0.1)", "rgba(62,107,62,0.12)"];
            const accentBorders = ["rgba(62,107,62,0.25)", "rgba(107,31,26,0.2)", "rgba(139,90,43,0.2)", "rgba(62,107,62,0.25)"];
            const accentLines = ["rgba(62,107,62,0.15)", "rgba(107,31,26,0.15)", "rgba(139,90,43,0.15)", "rgba(62,107,62,0.15)"];
            const accent = accentColors[ci % accentColors.length];
            return (
            <div key={cat.label}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex-shrink-0"
                  style={{
                    backgroundColor: accentBgs[ci % accentBgs.length],
                    color: accent,
                    border: `1px solid ${accentBorders[ci % accentBorders.length]}`,
                  }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: accentLines[ci % accentLines.length] }} />
              </div>

              {/* Accordion items */}
              <div className="flex flex-col gap-2">
                {cat.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl overflow-hidden border border-black/5"
                    style={{ backgroundColor: "var(--color-almond-cream-2)" }}
                  >
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none gap-4 hover:opacity-90 transition-opacity">
                      <span
                        className="font-extrabold text-sm leading-snug"
                        style={{ color: "var(--color-deep-mocha)" }}
                      >
                        {faq.question}
                      </span>
                      <div
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-light border transition-all"
                        style={{ borderColor: "rgba(58,47,47,0.15)", color: accent }}
                      >
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:block">−</span>
                      </div>
                    </summary>
                    <div
                      className="px-6 pb-5 pt-2 text-sm leading-relaxed border-t"
                      style={{ color: "rgba(58,47,47,0.75)", borderColor: "rgba(58,47,47,0.07)" }}
                    >
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ── Still Have Questions ── */}
      <section
        className="py-16 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] items-stretch">
            <div
              className="flex items-center justify-center px-8 py-6"
              style={{ backgroundColor: "var(--color-hunter-green)" }}
            >
              <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div
              className="px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
              style={{ backgroundColor: "var(--color-deep-mocha)" }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-1"
                  style={{ color: "rgba(243,229,216,0.5)" }}
                >
                  Still unsure?
                </p>
                <p
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: "var(--color-almond-cream)" }}
                >
                  Can't find your answer? Talk to our team directly.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/help-support"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: "var(--color-dark-wine)", color: "var(--color-almond-cream)" }}
                >
                  Get Support
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-bold transition hover:opacity-80"
                  style={{ borderColor: "rgba(243,229,216,0.35)", color: "var(--color-almond-cream)" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
