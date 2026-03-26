import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getOurStoryPageData } from "@/lib/sanity/queries/ourStory";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getOurStoryPageData();
  return {
    title: data.seo?.metaTitle ?? "Our Story – SRSGA",
    description:
      data.seo?.metaDescription ??
      "Learn the story behind the Sandalwood and Red Sanders Growers Association of Andhra Pradesh — who we are, why we started, and what drives us.",
  };
}

export default async function OurStoryPage() {
  const data = await getOurStoryPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[620px] flex items-end">
        <Image
          src="/assets/red9.webp"
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
              backgroundColor: "rgba(107,31,26,0.65)",
              color: "var(--color-almond-cream)",
              border: "1px solid rgba(243,229,216,0.25)",
            }}
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="6" r="5" opacity="0.4" />
              <circle cx="6" cy="6" r="2.5" />
            </svg>
            About SRSGA
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

      {/* ── Where It All Began ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Section badge */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-hunter-green)",
                  color: "var(--color-almond-cream)",
                }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Our Beginning
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.beginningTitle}
            </h2>

            {/* Triple divider */}
            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            {data.beginningBody.split("\n").filter(Boolean).map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(58,47,47,0.82)" }}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/red6.webp"
              alt="Farmers planting Red Sandalwood"
              width={720}
              height={560}
              className="w-full h-[480px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--color-deep-mocha)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.stats.map((stat, i) => {
            const accents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)", "var(--color-hunter-green)"];
            return { number: stat.value, label: stat.label, accent: accents[i % accents.length] };
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
      </section>

      {/* ── The Tree Behind Our Purpose ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/assets/red2.webp"
              alt="Mature Red Sandalwood Tree"
              width={720}
              height={640}
              className="w-full h-[520px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-dark-wine)",
                  color: "var(--color-almond-cream)",
                }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                The Tree
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107,31,26,0.2)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              The Tree Behind<br />
              <span style={{ color: "var(--color-dark-wine)" }}>Our Purpose</span>
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(58,47,47,0.82)" }}
            >
              <em>Pterocarpus santalinus</em> — commonly known as Red Sandalwood
              or Lal Chandan — is one of the most valuable and protected tree
              species in India. Native to the Eastern Ghats of Andhra Pradesh,
              this tree is prized for its striking red heartwood, which has been
              used for centuries in traditional medicine, religious practices, and
              fine craftsmanship.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(58,47,47,0.82)" }}
            >
              It grows slowly, patiently, and rewards those who care for it with
              extraordinary long-term value. For SRSGA, it is more than a tree —
              it is the foundation of livelihoods, the future of families, and the
              heart of our mission.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Scientific Name", value: "Pterocarpus santalinus", accent: "var(--color-dark-wine)" },
                { label: "Native Region", value: "Eastern Ghats, AP", accent: "var(--color-hunter-green)" },
                { label: "Maturity Period", value: "15 – 20 Years", accent: "var(--color-olive-wood)" },
                { label: "IUCN Status", value: "Endangered Species", accent: "var(--color-dark-wine)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4 border border-black/5 shadow-sm"
                  style={{ backgroundColor: "var(--color-almond-cream)" }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1"
                    style={{ color: item.accent }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-extrabold"
                    style={{ color: "var(--color-deep-mocha)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Roots Run Deep ── */}
      <section className="relative isolate overflow-hidden min-h-[440px] flex items-center">
        <Image
          src="/assets/red7.webp"
          alt="Red Sandalwood forest"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(62,107,62,0.35) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-20 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.22em] mb-6"
            style={{
              backgroundColor: "rgba(62,107,62,0.55)",
              color: "var(--color-almond-cream)",
              border: "1px solid rgba(243,229,216,0.2)",
            }}
          >
            Our Foundation
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-6"
            style={{ color: "var(--color-almond-cream)" }}
          >
            {data.rootsTitle}
          </h2>
          {/* Triple divider centered */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="var(--color-olive-wood)" />
              <circle cx="8" cy="8" r="6" stroke="var(--color-olive-wood)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
          </div>
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ color: "rgba(243,229,216,0.88)" }}
          >
            {data.rootsBody}
          </p>
        </div>
      </section>

      {/* ── What SRSGA Does — 3 Pillars ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-hunter-green)",
                  color: "var(--color-almond-cream)",
                }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Three Pillars
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.pillarsTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "rgba(58,47,47,0.7)" }}
            >
              Three core commitments that guide everything we do for our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pillars.slice(0, 3).map((pillar, i) => {
            const pillarImages = ["/assets/red5.webp", "/assets/red8.webp", "/assets/red10.webp"];
            const pillarAccents = ["var(--color-hunter-green)", "var(--color-dark-wine)", "var(--color-olive-wood)"];
            const pillarBgs = ["rgba(62,107,62,0.07)", "rgba(107,31,26,0.07)", "rgba(139,90,43,0.07)"];
            const pillarIconPaths = [
              <><path d="M12 22v-9" /><path d="M12 13C9.5 10.5 6 9.5 3 10.5c0 4 3.5 6.5 9 4.5" /><path d="M12 13c2.5-2.5 6-3.5 9-2.5 0 4-3.5 6.5-9 4.5" /></>,
              <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
              <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
            ];
            const acc = pillarAccents[i]; const bg = pillarBgs[i];
            return (
              <div
                key={pillar.title}
                className="rounded-3xl overflow-hidden shadow-md border border-black/5 group"
              >
                <div className="overflow-hidden h-52 relative">
                  <Image
                    src={pillarImages[i]}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white shadow-lg"
                    style={{ backgroundColor: acc }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: bg }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: bg, color: acc, border: `1px solid ${acc}30` }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {pillarIconPaths[i]}
                      </svg>
                    </div>
                    <h3 className="text-base font-extrabold" style={{ color: "var(--color-deep-mocha)" }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(58,47,47,0.78)" }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* ── The Value of Red Sandalwood ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream-2)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-dark-wine)",
                  color: "var(--color-almond-cream)",
                }}
              >
                Global Value
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              The Value of Red Sandalwood
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "rgba(58,47,47,0.7)" }}
            >
              The deep red heartwood of this tree is one of the most sought-after
              materials in traditional medicine, cosmetics, religious use, and fine
              woodworking globally.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/assets/red16.webp", alt: "Red Sandalwood cross section", caption: "Rich Heartwood" },
              { src: "/assets/red3.webp", alt: "Cut Red Sandalwood logs", caption: "Harvested Timber" },
              { src: "/assets/red18.webp", alt: "Red Sandalwood products", caption: "Finished Products" },
              { src: "/assets/red15.webp", alt: "Deep red sandalwood logs", caption: "Deep Red Colour" },
            ].map((img) => (
              <div
                key={img.caption}
                className="rounded-2xl overflow-hidden shadow-md group relative"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={280}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, rgba(26,18,15,0.85) 0%, transparent 100%)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-almond-cream)" }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Vision for the Future ── */}
      <section
        className="py-20 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-hunter-green)",
                  color: "var(--color-almond-cream)",
                }}
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.4" />
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
                Looking Forward
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.25)" }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-deep-mocha)" }}
            >
              {data.visionTitle}
            </h2>

            <div className="flex gap-2 mb-6">
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
              <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
              <div className="w-2 h-1 rounded-full" style={{ backgroundColor: "var(--color-olive-wood)" }} />
            </div>

            {data.visionBody.split("\n").filter(Boolean).map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(58,47,47,0.82)" }}
              >
                {para}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/join-now"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold shadow-xl transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-dark-wine)",
                  color: "var(--color-almond-cream)",
                }}
              >
                Join SRSGA Today
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-bold transition hover:opacity-80"
                style={{
                  borderColor: "var(--color-hunter-green)",
                  color: "var(--color-hunter-green)",
                }}
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Staggered image grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/red1.webp"
              alt="Young plantation"
              width={360}
              height={280}
              className="rounded-2xl h-56 w-full object-cover shadow-md"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
            <Image
              src="/assets/red19.webp"
              alt="Young sandalwood leaves"
              width={360}
              height={280}
              className="rounded-2xl h-56 w-full object-cover shadow-md mt-8"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
            <Image
              src="/assets/red4.webp"
              alt="Processing timber"
              width={360}
              height={280}
              className="rounded-2xl h-56 w-full object-cover shadow-md -mt-4"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
            <Image
              src="/assets/red20.webp"
              alt="Sandalwood leaves close up"
              width={360}
              height={280}
              className="rounded-2xl h-56 w-full object-cover shadow-md mt-4"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Mission Statement Banner ── */}
      <section
        className="px-4 sm:px-8 lg:px-16 pb-0 pt-0"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] items-stretch">
            <div
              className="flex items-center justify-center px-8 py-6"
              style={{ backgroundColor: "var(--color-dark-wine)" }}
            >
              <svg
                className="w-10 h-10 text-white opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="px-8 py-6" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: "rgba(243,229,216,0.55)" }}
              >
                Our Mission
              </p>
              <p
                className="text-base sm:text-lg font-semibold leading-relaxed"
                style={{ color: "var(--color-almond-cream)" }}
              >
                To create a{" "}
                <span style={{ color: "#a8d4a8" }}>secure</span>,{" "}
                <span style={{ color: "#f0d4a8" }}>organised</span>, and{" "}
                <span style={{ color: "#f9edd8" }}>supportive</span> environment
                for farmers who want to build long-term wealth through Sandalwood
                and Red Sanders cultivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative isolate overflow-hidden py-24 px-4 mt-16">
        <Image
          src="/assets/red19.webp"
          alt="Red Sandalwood plantation"
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
            Join the Movement
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ color: "var(--color-almond-cream)" }}
          >
            Become Part of Our Story
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
            Join hundreds of farmers who are already growing Red Sandalwood with
            the guidance and support of SRSGA. Your story starts here.
          </p>
          <Link
            href="/join-now"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold shadow-xl transition hover:opacity-90"
            style={{
              backgroundColor: "var(--color-dark-wine)",
              color: "var(--color-almond-cream)",
            }}
          >
            Join SRSGA Now
          </Link>
        </div>
      </section>
    </>
  );
}
