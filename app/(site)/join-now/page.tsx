import type { Metadata } from "next";
import Image from "next/image";
import { getJoinNowPageData } from "@/lib/sanity/queries/joinNow";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJoinNowPageData();
  return {
    title: data.seo?.metaTitle ?? "Join SRSGA – Become a Member",
    description:
      data.seo?.metaDescription ??
      "Join the Sandalwood and Red Sanders Growers Association of Andhra Pradesh. Get expert farming guidance, legal support, and become part of a trusted community.",
  };
}

export default async function JoinNowPage() {
  const data = await getJoinNowPageData();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden min-h-[380px] flex items-end">
        <Image
          src="/assets/red2.webp"
          alt="Red Sandalwood plantation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-14 w-full">
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
            Membership
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-3"
            style={{ color: "var(--color-almond-cream)" }}
          >
            {data.heroTitle}
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(243,229,216,0.82)" }}
          >
            {data.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section
        className="py-16 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-almond-cream)" }}
      >
        <div className="max-w-2xl mx-auto">

          {/* Form card */}
          <div
            className="rounded-2xl p-8 sm:p-10 border border-black/5 shadow-sm"
            style={{ backgroundColor: "var(--color-almond-cream-2)" }}
          >
            <form className="flex flex-col gap-6">

              {/* ── Personal Details ── */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-hunter-green)" }}
                  >
                    Personal Details
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(62,107,62,0.2)" }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Full Name <span style={{ color: "var(--color-dark-wine)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Father&apos;s / Husband&apos;s Name
                    </label>
                    <input
                      type="text"
                      placeholder="Father's or husband's name"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Phone Number <span style={{ color: "var(--color-dark-wine)" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>
                </div>
              </div>

              {/* ── Land Details ── */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-dark-wine)" }}
                  >
                    Land Details
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107,31,26,0.2)" }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      District <span style={{ color: "var(--color-dark-wine)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your district"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Mandal / Village
                    </label>
                    <input
                      type="text"
                      placeholder="Mandal or village"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Land Area (Acres)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2.5 acres"
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-deep-mocha)" }}
                    >
                      Plantation Status
                    </label>
                    <select
                      className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition"
                      style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                    >
                      <option>Not started yet</option>
                      <option>Planning to start</option>
                      <option>Seedlings planted</option>
                      <option>Active plantation (1–5 yrs)</option>
                      <option>Mature plantation (5+ yrs)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Additional Info ── */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-deep-mocha)" }}
                >
                  Any Questions or Additional Information
                </label>
                <textarea
                  rows={3}
                  placeholder="Any questions or details you would like to share..."
                  className="rounded-xl px-4 py-3 text-sm border border-black/10 focus:outline-none transition resize-none"
                  style={{ backgroundColor: "var(--color-almond-cream)", color: "var(--color-deep-mocha)" }}
                />
              </div>

              {/* ── Submit ── */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full py-4 font-bold text-sm transition hover:opacity-90 shadow-lg"
                  style={{
                    backgroundColor: "var(--color-dark-wine)",
                    color: "var(--color-almond-cream)",
                  }}
                >
                  Submit Application
                </button>
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "rgba(58,47,47,0.5)" }}
                >
                  Our team will contact you within 2 working days to complete your registration.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}
