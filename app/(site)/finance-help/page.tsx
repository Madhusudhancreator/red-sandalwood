import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Help – SRSGA",
  description:
    "Find out about government schemes, agricultural loans, subsidies, and financial planning support available for Red Sandalwood farmers through SRSGA.",
};

const schemes = [
  {
    icon: "🏦",
    title: "Agricultural Term Loans",
    who: "All registered farmers",
    benefit: "Loans up to ₹5–50 lakh for plantation development",
    description:
      "Banks and NABARD offer term loans for agro-forestry projects including Red Sandalwood plantation. SRSGA helps members prepare project reports and liaise with banks.",
  },
  {
    icon: "🌾",
    title: "NABARD Agro-forestry Scheme",
    who: "Farmers with 1+ acre land",
    benefit: "Subsidised loans with lower interest rates",
    description:
      "NABARD supports agro-forestry cultivation through its refinance scheme. Members get guidance on eligibility, application, and documentation required.",
  },
  {
    icon: "🏛️",
    title: "AP State Government Subsidies",
    who: "AP residents with agricultural land",
    benefit: "Direct subsidies on seedlings and inputs",
    description:
      "The Andhra Pradesh government offers subsidies under its horticulture and forestry schemes. SRSGA keeps members informed of current active programmes.",
  },
  {
    icon: "📋",
    title: "Kisan Credit Card (KCC)",
    who: "All farmers",
    benefit: "Revolving credit for farming expenses",
    description:
      "The Kisan Credit Card allows farmers to access short-term credit for day-to-day farming inputs, maintenance, and labour costs at low interest rates.",
  },
];

export default function FinanceHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 11.png"
          alt="Red Sandalwood timber warehouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Financial Guidance
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Finance Help</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            Growing Red Sandalwood is a long-term investment. We help farmers understand
            their financing options, access government schemes, and plan for sustainable returns.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">
              Funding Your Red Sandalwood Future
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Starting a Red Sandalwood plantation requires an initial investment — land
              preparation, quality seedlings, fencing, irrigation, and maintenance. For many
              farmers, accessing the right financial support can make all the difference.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              SRSGA helps members navigate available government schemes, agricultural loans,
              and subsidies specifically designed for agro-forestry projects like Red
              Sandalwood cultivation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We also help members build proper project reports and documentation to improve
              their chances of loan approval and subsidy access.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 3.png"
              alt="Red Sandalwood timber value"
              className="w-full h-[460px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ROI Highlight */}
      <section className="bg-forest-800 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "₹5,000+", label: "Per kg heartwood value" },
            { number: "15–20 yrs", label: "Investment maturity period" },
            { number: "High ROI", label: "One of India's best tree crops" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-sandalwood-400 mb-2">{s.number}</p>
              <p className="text-forest-200 font-medium text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schemes */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Available Finance Schemes</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Key schemes and programmes that SRSGA members can access with our guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((s) => (
              <div key={s.title} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-sandalwood-200 transition-all">
                <div className="w-14 h-14 bg-sandalwood-50 border border-sandalwood-100 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-800 mb-1">{s.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-xs bg-forest-100 text-forest-700 font-semibold px-3 py-1 rounded-full">{s.who}</span>
                  <span className="text-xs bg-sandalwood-100 text-sandalwood-700 font-semibold px-3 py-1 rounded-full">{s.benefit}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">How SRSGA Helps with Finance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📄", title: "Project Report Preparation", desc: "We help you prepare a professional project report that banks and government agencies require for loan and subsidy applications." },
              { icon: "🏛️", title: "Government Scheme Navigation", desc: "Our team stays updated on all active AP state and central government schemes and helps members identify which they qualify for." },
              { icon: "🤝", title: "Bank Liaison Support", desc: "We accompany and assist members during bank visits and communications to ensure your application is submitted correctly and on time." },
            ].map((item) => (
              <div key={item.title} className="bg-sandalwood-50 rounded-3xl p-7 border border-sandalwood-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img src="/assets/red 17.png" alt="Red Sandalwood logs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Finance Guidance?</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Talk to our team today and we will help you find the right financial support
            for your Red Sandalwood plantation project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="inline-block bg-sandalwood-600 hover:bg-sandalwood-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-lg">
              Talk to Us
            </a>
            <a href="/join-now" className="inline-block border border-white text-white hover:bg-white hover:text-forest-800 font-bold px-10 py-4 rounded-2xl text-lg transition-colors">
              Join SRSGA
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
