import Link from "next/link";
import Image from "next/image";
import type { HomePageData } from "@/lib/sanity/queries/home";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { urlFor } from "@/lib/sanity/image";

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

export function HomePageContent({ data }: { data: HomePageData }) {
  const comparisonFallbackImages = ["/assets/red 8.png", "/assets/red 17.png"];
  const historyImage = imageUrl(data.historyImage, 1200, 900) ?? "/assets/red 6.png";

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f3ea_0%,#fffdf8_100%)] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,rgba(13,43,30,0.08),transparent_40%),radial-gradient(circle_at_top_right,rgba(168,104,40,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-sandalwood-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sandalwood-700 shadow-sm">
                {data.heroLabel}
              </span>
              <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
                {data.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                {data.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton href={data.heroSecondaryCta.href} label={data.heroSecondaryCta.label} variant="secondary" />
                <CtaButton href={data.heroPrimaryCta.href} label={data.heroPrimaryCta.label} variant="primary" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {data.trustBadges.map((badge) => (
                  <div key={badge} className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-medium text-forest-800 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-sandalwood-500" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-sandalwood-100 bg-white shadow-xl">
                <Image src="/assets/banner_one.jpeg" alt="Farmer planting sandalwood sapling" fill priority className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-sandalwood-100 bg-white shadow-lg">
                  <Image src="/assets/red 9.png" alt="Structured plantation rows" fill className="object-cover" sizes="(min-width: 1024px) 18vw, 100vw" />
                </div>
                <div className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-sandalwood-100 bg-white shadow-lg">
                  <Image src="/assets/red 3.png" alt="Red sandalwood timber" fill className="object-cover" sizes="(min-width: 1024px) 18vw, 100vw" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {data.comparisonCards.map((card, index) => {
              const cardImage = imageUrl(card.image, 900, 600) ?? comparisonFallbackImages[index] ?? "/assets/red 8.png";
              return (
                <article key={card.title} className="grid overflow-hidden rounded-[30px] border border-sandalwood-100 bg-white shadow-sm sm:grid-cols-[220px_1fr]">
                  <div className="relative min-h-[220px]">
                    <Image src={cardImage} alt={card.title} fill className="object-cover" sizes="(min-width: 640px) 220px, 100vw" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <span className="inline-flex rounded-full bg-sandalwood-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sandalwood-700">
                      {card.badge}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-forest-900">{card.title}</h2>
                    <p className="mt-3 text-sm font-semibold text-forest-700">{card.highlight}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-forest-900/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf8_100%)] p-8 shadow-sm sm:p-10">
              <h2 className="text-3xl font-semibold text-forest-900">{data.associationTitle}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {data.associationCards.map((card, index) => (
                  <article key={card.title} className="rounded-[24px] border border-forest-100 bg-white p-5 shadow-sm">
                    <div className="text-2xl">{associationIcons[index] ?? "🌿"}</div>
                    <h3 className="mt-4 text-lg font-bold text-forest-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-sandalwood-100 bg-[linear-gradient(180deg,#fffdf9_0%,#f7f1e5_100%)] p-8 shadow-sm sm:p-10">
              <h2 className="text-3xl font-semibold text-forest-900">{data.treeValueTitle}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {data.treeValueCards.map((card, index) => (
                  <article key={card.title} className="rounded-[24px] border border-sandalwood-100 bg-white p-5 shadow-sm">
                    <div className="text-2xl">{treeValueIcons[index] ?? "🌳"}</div>
                    <h3 className="mt-4 text-lg font-bold text-forest-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sandalwood-50/60 py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-700">Crop clarity</span>
            <h2 className="mt-4 text-3xl font-semibold text-forest-900 sm:text-4xl">{data.comparisonTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{data.comparisonSubtitle}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {data.comparisonCards.map((card, index) => {
              const cardImage = imageUrl(card.image, 1000, 800) ?? comparisonFallbackImages[index] ?? "/assets/red 8.png";
              return (
                <article key={`${card.title}-detail`} className="overflow-hidden rounded-[32px] border border-sandalwood-100 bg-white shadow-sm">
                  <div className="relative h-64">
                    <Image src={cardImage} alt={card.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-forest-900">{card.title}</h3>
                      <span className="rounded-full bg-sandalwood-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sandalwood-700">{card.badge}</span>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-forest-700">{card.highlight}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-sandalwood-100 shadow-xl">
            <Image src={historyImage} alt="SRSGA grower journey" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-700">{data.historyEyebrow}</span>
            <h2 className="mt-4 text-3xl font-semibold text-forest-900 sm:text-4xl">{data.historyTitle}</h2>
            <div className="mt-6 rounded-[28px] border border-forest-100 bg-forest-50 p-6 shadow-sm">
              <PortableTextRenderer body={data.historyBody} />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.historyMilestones.map((item) => (
                <article key={item.label} className="rounded-[24px] border border-sandalwood-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sandalwood-700">{item.value}</div>
                  <h3 className="mt-3 text-lg font-bold text-forest-900">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="member-benefits" className="bg-[linear-gradient(180deg,#f7fbf8_0%,#ffffff_100%)] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-700">Membership value</span>
            <h2 className="mt-4 text-3xl font-semibold text-forest-900 sm:text-4xl">{data.memberBenefitsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{data.memberBenefitsSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.memberBenefits.map((benefit, index) => (
              <article key={benefit.title} className="rounded-[28px] border border-forest-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-2xl">{benefitIcons[index] ?? "🌿"}</div>
                <h3 className="mt-4 text-xl font-bold text-forest-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[30px] border border-sandalwood-100 shadow-lg min-h-[280px]">
              <Image src="/assets/red 5.png" alt="Grower support in plantation field" fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <article id="support" className="rounded-[30px] border border-forest-100 bg-[linear-gradient(180deg,#f7fbf8_0%,#ffffff_100%)] p-7 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sandalwood-700">Support</span>
              <h2 className="mt-4 text-2xl font-bold text-forest-900">{data.supportTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{data.supportSubtitle}</p>
              <ul className="mt-6 space-y-3">
                {data.supportItems.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-forest-800 shadow-sm border border-forest-100">
                    <span>{supportIcons[index] ?? "🌱"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article id="legal-advice" className="rounded-[30px] border border-sandalwood-100 bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_100%)] p-7 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sandalwood-700">Legal Advice</span>
              <h2 className="mt-4 text-2xl font-bold text-forest-900">{data.legalTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{data.legalSubtitle}</p>
              <ul className="mt-6 space-y-3">
                {data.legalItems.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-forest-800 shadow-sm border border-sandalwood-100">
                    <span>{legalIcons[index] ?? "⚖️"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-18 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-300">Guided progress</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{data.journeyTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-forest-100">{data.journeySubtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {data.journeySteps.map((step, index) => {
              const stepImage = imageUrl(step.image, 700, 700) ?? timelineFallbackImages[index] ?? "/assets/steps/1.png";
              return (
                <article key={`${step.step}-${step.title}`} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-lg backdrop-blur-sm">
                  <div className="relative h-44">
                    <Image src={stepImage} alt={step.title} fill className="object-cover" sizes="(min-width: 1024px) 20vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-sandalwood-500 px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">{step.step}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-forest-100">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-700">FAQ</span>
            <h2 className="mt-4 text-3xl font-semibold text-forest-900 sm:text-4xl">{data.faqTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{data.faqSubtitle}</p>
          </div>
          <div className="mt-10 space-y-4">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[24px] border border-gray-200 bg-white p-0 shadow-sm open:border-sandalwood-300 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-forest-900">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sandalwood-200 text-sandalwood-700 group-open:bg-sandalwood-600 group-open:text-white">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-7 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d2b1e_0%,#1b4332_55%,#2d6a4f_100%)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/red 10.png" alt="Plantation background" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <div className="rounded-[36px] border border-white/10 bg-white/10 px-6 py-12 text-center shadow-2xl backdrop-blur-lg sm:px-10">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sandalwood-300">Join the association</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{data.ctaTitle}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-forest-100">{data.ctaSubtitle}</p>
            <p className="mt-4 text-sm font-medium text-sandalwood-100">{data.ctaTrustLine}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CtaButton href={data.ctaPrimary.href} label={data.ctaPrimary.label} variant="primary" />
              <CtaButton href={data.ctaSecondary.href} label={data.ctaSecondary.label} variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
