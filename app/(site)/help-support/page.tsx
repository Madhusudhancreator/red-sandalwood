import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support – SRSGA",
  description:
    "Get help and support from SRSGA for all your Red Sandalwood farming questions — from planting to legal guidance.",
};

const supportCategories = [
  {
    icon: "🌱",
    title: "Farming Support",
    description: "Questions about soil, seedlings, planting, irrigation, or maintenance.",
    topics: ["Soil preparation", "Seedling care", "Watering schedule", "Pest control", "Pruning tips"],
  },
  {
    icon: "⚖️",
    title: "Legal Support",
    description: "Help with forest department rules, permits, registrations, and compliance.",
    topics: ["Land registration", "Forest dept. NOC", "Harvest permits", "Transport documents", "Legal FAQs"],
  },
  {
    icon: "💰",
    title: "Finance Support",
    description: "Guidance on agricultural loans, subsidies, and government schemes.",
    topics: ["Loan eligibility", "Govt. subsidies", "Bank liaison", "Investment planning", "ROI estimates"],
  },
  {
    icon: "📦",
    title: "Market Support",
    description: "Information on timber pricing, buyers, and export opportunities.",
    topics: ["Current timber prices", "Buyer connections", "Export process", "Market trends", "Valuation help"],
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

export default function HelpSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 6.png"
          alt="Farmers planting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            We Are Here For You
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Help & Support</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            Whether you have a farming question, need legal guidance, or want to understand
            your options — SRSGA is always here to help.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">How Can We Help You?</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We offer support across four key areas that matter most to Red Sandalwood farmers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-sandalwood-50 rounded-3xl p-8 border border-sandalwood-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-white border border-sandalwood-200 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-forest-800 mb-2">{cat.title}</h3>
                <p className="text-gray-600 mb-5">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sandalwood-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Ways to Reach Us</h2>
            <p className="text-gray-500 text-lg">Choose whichever way works best for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📞", title: "Call Us", detail: "+91 00000 00000", sub: "Mon–Sat, 9 AM – 6 PM" },
              { icon: "✉️", title: "Email Us", detail: "support@srsga.in", sub: "We respond within 24 hrs" },
              { icon: "📍", title: "Visit Us", detail: "SRSGA Office, Andhra Pradesh", sub: "By appointment" },
            ].map((m) => (
              <div key={m.title} className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-bold text-forest-800 mb-2">{m.title}</h3>
                <p className="text-forest-700 font-semibold mb-1">{m.detail}</p>
                <p className="text-gray-500 text-sm">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Common Support Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-sandalwood-50 border border-sandalwood-100 rounded-2xl overflow-hidden open:border-sandalwood-400"
              >
                <summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none text-forest-800 font-semibold text-lg gap-4 hover:bg-sandalwood-100 transition-colors">
                  <span>{faq.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-gray-300 group-open:bg-sandalwood-600 group-open:border-sandalwood-600 group-open:text-white flex items-center justify-center text-xl font-light transition-all">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-7 pb-6 pt-2 text-gray-600 text-base leading-relaxed border-t border-sandalwood-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-500 text-lg">Fill in the form below and we will get back to you shortly.</p>
          </div>
          <form className="bg-white rounded-3xl p-10 shadow-sm border border-sandalwood-100 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Full Name</label>
                <input type="text" placeholder="Your name" className="bg-sandalwood-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="bg-sandalwood-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-forest-800">Support Category</label>
              <select className="bg-sandalwood-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 transition">
                <option>Farming Support</option>
                <option>Legal Support</option>
                <option>Finance Support</option>
                <option>Market Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-forest-800">Your Question</label>
              <textarea rows={4} placeholder="Describe your question or issue..." className="bg-sandalwood-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition resize-none" />
            </div>
            <button type="submit" className="w-full bg-forest-800 hover:bg-forest-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-base">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
