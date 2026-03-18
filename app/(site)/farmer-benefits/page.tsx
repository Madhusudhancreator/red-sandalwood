import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer Benefits – SRSGA",
  description:
    "Explore the benefits available to Red Sandalwood farmers who are members of SRSGA — guidance, legal support, training, and more.",
};

const benefits = [
  {
    icon: "🌿",
    title: "Free Farming Guidance",
    description:
      "Every SRSGA member gets access to expert guidance on soil preparation, planting techniques, irrigation, maintenance, and harvesting — completely free of charge.",
  },
  {
    icon: "⚖️",
    title: "Legal Documentation Support",
    description:
      "We assist members with all required forest department registrations, land documentation, and permits needed to legally grow, harvest, and transport Red Sandalwood.",
  },
  {
    icon: "🎓",
    title: "Training Workshops",
    description:
      "Regular in-person workshops, online sessions, and PDF guides keep members updated on the latest farming techniques, regulations, and market trends.",
  },
  {
    icon: "🤝",
    title: "Member Network Access",
    description:
      "Join a trusted community of hundreds of fellow Red Sandalwood farmers across Andhra Pradesh. Share knowledge, get advice, and grow together.",
  },
  {
    icon: "📊",
    title: "Market Price Information",
    description:
      "Members receive regular updates on Red Sandalwood timber prices, export market news, and buyer connections to help them get the best value for their harvest.",
  },
  {
    icon: "🔍",
    title: "Land Suitability Assessment",
    description:
      "Our team will assess your land to determine its suitability for Red Sandalwood cultivation and recommend the best approach for your specific conditions.",
  },
  {
    icon: "💰",
    title: "Finance & Loan Guidance",
    description:
      "We help members understand government agricultural loan schemes, subsidies, and financial support programmes available for Red Sandalwood plantation projects.",
  },
  {
    icon: "📞",
    title: "Dedicated Member Support",
    description:
      "A dedicated helpline and support team is available to answer member queries, resolve issues, and provide guidance at any stage of your farming journey.",
  },
];

export default function FarmerBenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 8.png"
          alt="Red Sandalwood Plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Member Benefits
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Farmer Benefits</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            When you join SRSGA, you gain more than membership — you gain a complete support
            system built around your success as a Red Sandalwood farmer.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">
              Every Member Gets Full Support
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Red Sandalwood farming is a long-term commitment. It requires the right knowledge,
              legal compliance, and patience. SRSGA makes sure you never have to face any of
              these challenges alone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              From the day you register as a member, our team is with you — helping you
              plan your plantation, complete your legal documents, attend training sessions,
              and connect with fellow farmers who understand your journey.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every benefit we offer is designed to protect your investment, grow your
              knowledge, and secure your future.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 5.png"
              alt="Farmers at work"
              className="w-full h-[460px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">What You Get as a Member</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              8 core benefits that every SRSGA member can access from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-sandalwood-200 transition-all group"
              >
                <div className="w-12 h-12 bg-sandalwood-50 border border-sandalwood-100 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-sandalwood-100 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-forest-800 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight banner */}
      <section className="relative isolate overflow-hidden min-h-[340px] flex items-center">
        <img
          src="/assets/red 9.png"
          alt="Plantation aerial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
          {[
            { number: "500+", label: "Active Members" },
            { number: "8+", label: "Benefits Included" },
            { number: "100%", label: "Legal Compliance" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-black text-sandalwood-400 mb-2">{s.number}</p>
              <p className="text-forest-200 font-medium text-lg">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img
          src="/assets/red 10.png"
          alt="Plantation walkway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Benefiting Today</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Join SRSGA and immediately gain access to all member benefits — no delays,
            no complications. Just full support from day one.
          </p>
          <a
            href="/join-now"
            className="inline-block bg-sandalwood-600 hover:bg-sandalwood-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-lg"
          >
            Join SRSGA Now
          </a>
        </div>
      </section>
    </>
  );
}
