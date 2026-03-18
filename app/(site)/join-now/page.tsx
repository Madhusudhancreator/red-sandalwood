import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join SRSGA – Become a Member",
  description:
    "Join the Sandalwood and Red Sanders Growers Association of Andhra Pradesh. Get expert farming guidance, legal support, and become part of a trusted community.",
};

const included = [
  "Expert Red Sandalwood farming guidance",
  "Legal documentation and compliance support",
  "Access to government scheme assistance",
  "Regular training workshops and resources",
  "Farmer network and community access",
  "Market price updates and trade information",
  "Personal SRSGA member ID and certificate",
  "Dedicated support team access",
];

const steps = [
  { number: "01", title: "Fill the Form", desc: "Complete the membership application form below with your personal and land details." },
  { number: "02", title: "Document Verification", desc: "Our team will review your submitted documents and verify your eligibility." },
  { number: "03", title: "Welcome to SRSGA", desc: "Once approved, you receive your member ID, certificate, and full access to all benefits." },
];

export default function JoinNowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 2.png"
          alt="Mature Red Sandalwood tree"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Membership
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Join SRSGA Today</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            Become part of a trusted community of Red Sandalwood farmers in Andhra Pradesh.
            Get the support, guidance, and legal backing you need to grow with confidence.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Why Become a Member?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              SRSGA membership gives you access to a complete support system for your
              Red Sandalwood farming journey — from planting your first seedling to legally
              harvesting and selling your timber. Every member receives the same full support
              regardless of land size or experience.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-base">
                  <span className="w-5 h-5 rounded-full bg-green-100 border border-green-300 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 10.png"
              alt="Red Sandalwood plantation"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sandalwood-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">How to Join</h2>
            <p className="text-gray-500 text-lg">Simple 3-step process to become an SRSGA member.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-forest-800 text-white flex items-center justify-center font-black text-lg mx-auto mb-5 shadow-md">
                  {s.number}
                </div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Membership Application</h2>
            <p className="text-gray-500 text-lg">Fill in your details below. Our team will contact you within 2 working days.</p>
          </div>
          <form className="bg-sandalwood-50 border border-sandalwood-100 rounded-3xl p-10 shadow-sm flex flex-col gap-5">
            {/* Personal Details */}
            <h3 className="text-lg font-bold text-forest-800 border-b border-sandalwood-200 pb-3">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Your full name" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Father's / Husband's Name</label>
                <input type="text" placeholder="Father's or husband's name" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="+91 00000 00000" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Email Address</label>
                <input type="email" placeholder="you@example.com" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
            </div>

            {/* Land Details */}
            <h3 className="text-lg font-bold text-forest-800 border-b border-sandalwood-200 pb-3 mt-2">Land Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">District <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Your district" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Mandal / Village</label>
                <input type="text" placeholder="Mandal or village" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Land Area (Acres)</label>
                <input type="text" placeholder="e.g. 2.5 acres" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Plantation Status</label>
                <select className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 transition">
                  <option>Not started yet</option>
                  <option>Planning to start</option>
                  <option>Seedlings planted</option>
                  <option>Active plantation (1–5 yrs)</option>
                  <option>Mature plantation (5+ yrs)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-forest-800">Any Questions or Additional Information</label>
              <textarea rows={3} placeholder="Any questions or details you would like to share..." className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition resize-none" />
            </div>

            <button type="submit" className="w-full bg-forest-800 hover:bg-forest-700 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-md">
              Submit Application
            </button>
            <p className="text-center text-gray-400 text-xs">Our team will contact you within 2 working days to complete your registration.</p>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-20 px-4">
        <img src="/assets/red 8.png" alt="Plantation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions Before Joining?</h2>
          <p className="text-forest-200 text-lg leading-relaxed mb-8">
            Talk to our team first. We are happy to answer any questions you have before you apply.
          </p>
          <a href="/contact" className="inline-block border border-white text-white hover:bg-white hover:text-forest-800 font-bold px-8 py-3.5 rounded-2xl transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
