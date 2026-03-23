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
      ? "inline-flex items-center justify-center rounded-full bg-sandalwood-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sandalwood-900/20 transition hover:bg-sandalwood-600"
      : "inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-forest-900";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function HomePageContent({ data }: { data: HomePageData }) {
  const heroImage = imageUrl(data.heroImage, 1600, 1200) ?? "/assets/banner_one.jpeg";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={data.heroTitle} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/85 to-forest-900/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,131,58,0.28),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(45,106,79,0.28),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-sandalwood-200/30 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-sandalwood-100 backdrop-blur">
              {data.heroEyebrow}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              {data.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-100 sm:text-xl">
              {data.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href={data.heroPrimaryCta.href} label={data.heroPrimaryCta.label} variant="primary" />
              <CtaButton href={data.heroSecondaryCta.href} label={data.heroSecondaryCta.label} variant="secondary" />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="text-3xl font-black text-sandalwood-200">{stat.value}</div>
                  <div className="mt-2 text-sm text-forest-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:ml-auto lg:max-w-md">
            <div className="rounded-[28px] bg-white p-7 text-forest-900 shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-sandalwood-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sandalwood-700">
                Farmer-first support
              </div>
              <h2 className="text-2xl font-bold text-forest-900">From first plantation steps to long-term value planning.</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                The homepage now follows one backend-driven flow so your hero, trust points, featured pages, journey steps, FAQs, and CTA can all be managed from one Sanity document.
              </p>
              <div className="mt-6 grid gap-3">
                {data.keyPoints.slice(0, 3).map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-sandalwood-50 px-4 py-3 text-sm text-forest-800">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sandalwood-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sandalwood-600">
              {data.missionEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-forest-900 sm:text-4xl">
              {data.missionTitle}
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-sandalwood-500" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-sandalwood-100 bg-sandalwood-50/60 p-8 shadow-sm">
              <PortableTextRenderer body={data.missionStatement} />
            </div>
            <div className="rounded-[28px] bg-forest-900 p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">What you can highlight in Sanity</h3>
              <ul className="mt-6 space-y-4">
                {data.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-forest-100">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-sandalwood-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sandalwood-50 to-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sandalwood-600">Homepage navigation</span>
            <h2 className="mt-4 text-3xl font-bold text-forest-900 sm:text-4xl">{data.featuredSectionTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{data.featuredSectionSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {data.featuredSections.map((section, index) => (
              <article key={`${section.title}-${section.link}`} className="group rounded-[28px] border border-sandalwood-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sandalwood-100 text-lg font-bold text-sandalwood-700">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-forest-900">{section.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{section.description}</p>
                <Link href={section.link} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sandalwood-700 transition group-hover:text-sandalwood-500">
                  {section.linkLabel}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sandalwood-300">Plantation journey</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{data.journeyTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-forest-100">{data.journeySubtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {data.journeySteps.map((step) => {
              const stepImage = imageUrl(step.image, 800, 600);

              return (
                <article key={`${step.step}-${step.title}`} className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
                  <div className="relative h-56 bg-forest-800">
                    <Image
                      src={stepImage ?? "/assets/steps/3.png"}
                      alt={step.title}
                      fill
                      className="object-cover opacity-90"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/25 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex rounded-full bg-sandalwood-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-forest-100">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sandalwood-600">FAQs</span>
            <h2 className="mt-4 text-3xl font-bold text-forest-900 sm:text-4xl">{data.faqTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{data.faqSubtitle}</p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <article key={faq.question} className="rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition hover:border-sandalwood-200 hover:shadow-md">
                <h3 className="text-lg font-bold text-forest-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0d2b1e_0%,#1b4332_55%,#2d6a4f_100%)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/10 px-6 py-12 text-center shadow-2xl backdrop-blur-xl sm:px-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sandalwood-300">Take the next step</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{data.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-forest-100">{data.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaButton href={data.ctaPrimary.href} label={data.ctaPrimary.label} variant="primary" />
            <CtaButton href={data.ctaSecondary.href} label={data.ctaSecondary.label} variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
