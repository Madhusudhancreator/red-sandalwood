import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us – SRSGA",
  description:
    "Discover why farmers across Andhra Pradesh trust SRSGA for Red Sandalwood guidance, legal support, and a secure farming future.",
};

const reasons = [
  {
    icon: "🌱",
    title: "Expert Farming Guidance",
    description:
      "From soil preparation to seedling care and maintenance, we provide clear, tested guidance at every stage of the Red Sandalwood growing process.",
  },
  {
    icon: "⚖️",
    title: "Full Legal Support",
    description:
      "We guide you through forest department registration, documentation, and all permits needed for plantation, harvesting, and transport — fully compliant with AP regulations.",
  },
  {
    icon: "🤝",
    title: "Trusted Farmer Community",
    description:
      "Join a network of hundreds of growers who share knowledge, experience, and support. With SRSGA, you are never alone in your farming journey.",
  },
  {
    icon: "📈",
    title: "Long-Term Investment Value",
    description:
      "Red Sandalwood is one of the highest-value tree crops in India. We help you understand its market potential and plan for the best long-term returns.",
  },
  {
    icon: "🎓",
    title: "Training & Workshops",
    description:
      "We organise regular farmer training sessions, workshops, and knowledge-sharing programmes so members always have access to updated, practical information.",
  },
  {
    icon: "🛡️",
    title: "Protection at Every Step",
    description:
      "From the day you plant your first seedling to the day you harvest, SRSGA ensures your rights are protected and your investment is secure.",
  },
];

const comparisons = [
  {
    point: "Farming guidance",
    with: "Step-by-step expert support",
    without: "Trial and error, risky mistakes",
  },
  {
    point: "Legal process",
    with: "Handled with full documentation",
    without: "Confusing, time-consuming, risky",
  },
  {
    point: "Market access",
    with: "Connected to buyers and price info",
    without: "Uncertain pricing, middlemen",
  },
  {
    point: "Community",
    with: "Network of trusted fellow farmers",
    without: "Isolated, no support system",
  },
  {
    point: "Training",
    with: "Workshops, videos, PDF guides",
    without: "Limited access to knowledge",
  },
  {
    point: "Investment confidence",
    with: "Clear path with SRSGA backing",
    without: "Uncertainty and hesitation",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[560px] flex items-end">
        <img
          src="/assets/red 10.png"
          alt="Red Sandalwood Plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why SRSGA
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">
            Why Choose Us
          </h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            We are more than an association. We are the support system every Red Sandalwood
            farmer in Andhra Pradesh deserves — from day one to harvest day.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">
              Farmers Deserve More Than Advice — They Deserve a Partner
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Many farmers in Andhra Pradesh are interested in growing Red Sandalwood but
              do not know where to begin. The process can seem complicated — soil requirements,
              legal registrations, long waiting periods, and uncertain markets.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              SRSGA was built to remove every one of those barriers. We do not just point
              you in the right direction — we walk the entire journey with you. Our members
              get clear guidance, hands-on support, legal assistance, and a community of
              farmers who have been through the same path.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When you choose SRSGA, you choose confidence, clarity, and a future that is
              worth growing for.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 5.png"
              alt="Farmers at work"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6 Reasons Grid */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">6 Reasons to Choose SRSGA</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Everything we offer is designed around what farmers actually need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-sandalwood-200 transition-all group"
              >
                <div className="w-14 h-14 bg-sandalwood-50 border border-sandalwood-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:bg-sandalwood-100 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative isolate overflow-hidden min-h-[360px] flex items-center">
        <img
          src="/assets/red 8.png"
          alt="Plantation rows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/78" />
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-20 text-center">
          <p className="text-3xl font-bold text-white leading-relaxed mb-6">
            "No farmer should have to figure out Red Sandalwood alone. That is why SRSGA exists."
          </p>
          <p className="text-sandalwood-400 font-semibold text-lg">— SRSGA Founding Members</p>
        </div>
      </section>

      {/* With vs Without Comparison */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">With SRSGA vs Without SRSGA</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              See the difference that the right support makes for a Red Sandalwood farmer.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-forest-800 text-white">
              <div className="px-6 py-4 font-semibold text-forest-200 text-sm uppercase tracking-wide">Area</div>
              <div className="px-6 py-4 font-bold text-center border-l border-forest-700">
                <span className="text-sandalwood-400">✓</span> With SRSGA
              </div>
              <div className="px-6 py-4 font-bold text-center border-l border-forest-700 text-gray-400">
                <span>✗</span> Without SRSGA
              </div>
            </div>
            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.point}
                className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-sandalwood-50/50"}`}
              >
                <div className="px-6 py-5 font-semibold text-forest-800 text-sm">{row.point}</div>
                <div className="px-6 py-5 text-forest-700 text-sm border-l border-gray-100 flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                  {row.with}
                </div>
                <div className="px-6 py-5 text-gray-400 text-sm border-l border-gray-100 flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✗</span>
                  {row.without}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support You — steps */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 1.png"
              alt="Young Red Sandalwood plantation"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-8">How We Support You</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Register & Assess",
                  desc: "Join SRSGA and our team will assess your land, location, and soil to guide you on the best approach for your plantation.",
                },
                {
                  step: "02",
                  title: "Plan & Prepare",
                  desc: "We help you create a planting plan, source quality seedlings, and prepare your land with the right techniques.",
                },
                {
                  step: "03",
                  title: "Legal Registration",
                  desc: "We guide you through all required government documentation and forest department registrations — step by step.",
                },
                {
                  step: "04",
                  title: "Grow & Maintain",
                  desc: "Throughout the growing years, SRSGA provides ongoing support, training updates, and access to our farmer network.",
                },
                {
                  step: "05",
                  title: "Harvest & Benefit",
                  desc: "When the time comes, we assist with harvest permits, timber valuation, and connecting you to the right markets.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-800 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img
          src="/assets/red 2.png"
          alt="Red Sandalwood tree"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Grow with Confidence?</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Join SRSGA today and get access to expert guidance, legal support, and a
            community of farmers who are building a better future — one tree at a time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/join-now"
              className="inline-block bg-sandalwood-600 hover:bg-sandalwood-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-lg"
            >
              Join SRSGA Now
            </a>
            <a
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-forest-800 font-bold px-10 py-4 rounded-2xl text-lg transition-colors"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
