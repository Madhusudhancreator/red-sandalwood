import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Steps – SRSGA",
  description:
    "Step-by-step legal guidance for Red Sandalwood farmers in Andhra Pradesh — registration, documentation, harvest permits, and transport compliance.",
};

const steps = [
  {
    number: "01",
    title: "Land Ownership Verification",
    description:
      "Ensure your land ownership documents (Pattadar Passbook / RoR) are up to date and registered in your name. This is the foundation of all legal processes for your plantation.",
    note: "Required document: Pattadar Passbook, Aadhaar Card",
  },
  {
    number: "02",
    title: "Plantation Registration",
    description:
      "Register your Red Sandalwood plantation with the local Mandal Forest Officer (MFO) or Divisional Forest Officer (DFO). This officially records your trees and protects your ownership rights.",
    note: "Required: Land documents, application form, site details",
  },
  {
    number: "03",
    title: "Obtain No Objection Certificate (NOC)",
    description:
      "In some districts, a No Objection Certificate from the Forest Department is required before beginning plantation on private land. SRSGA helps you determine if this applies to your area.",
    note: "Depends on district — SRSGA will advise",
  },
  {
    number: "04",
    title: "Tree Numbering & Survey",
    description:
      "Once trees reach a certain age, the Forest Department will conduct a survey and number each tree. This is a mandatory step before any harvesting activity is permitted.",
    note: "Applicable when trees are 5+ years old",
  },
  {
    number: "05",
    title: "Harvest Permission Application",
    description:
      "When your trees are mature and ready for harvest (15–20 years), you must apply for a Timber Felling Permission from the Forest Department. This requires your plantation registration records.",
    note: "Apply 3–6 months before planned harvest",
  },
  {
    number: "06",
    title: "Transit Permit for Transport",
    description:
      "After harvest, a Transit Permit (Form 47 / equivalent) is required to transport the timber from your land to a storage facility or buyer. This prevents any legal issues during transport.",
    note: "Required at every check post during transport",
  },
  {
    number: "07",
    title: "Sale & Trade Documentation",
    description:
      "Any sale of Red Sandalwood timber must be documented with proper invoices, buyer details, and weight certificates. SRSGA guides members through the correct documentation for legal trade.",
    note: "Keep records of all transactions",
  },
];

export default function LegalStepsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 4.png"
          alt="Red Sandalwood processing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Legal Compliance
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Legal Steps</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            Growing Red Sandalwood legally protects your investment and your future.
            SRSGA guides you through every legal step from plantation to sale.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">
              Legal Compliance Protects Every Farmer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Red Sandalwood is a protected species under Indian forest laws. While it is
              completely legal to grow on private land, there are important registration,
              documentation, and permit requirements that every farmer must follow.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Non-compliance — even unintentionally — can result in legal complications that
              put your entire investment at risk. SRSGA ensures this never happens to our members.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We have supported hundreds of farmers through the complete legal process and
              we know exactly what is required at every step.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-3">
                <p className="text-green-700 font-semibold text-sm">✓ Legal to grow on private land</p>
              </div>
              <div className="bg-sandalwood-50 border border-sandalwood-200 rounded-2xl px-5 py-3">
                <p className="text-sandalwood-700 font-semibold text-sm">⚠ Permits required to harvest</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 14.png"
              alt="Farmer harvesting Red Sandalwood"
              className="w-full h-[460px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">7 Legal Steps Every Farmer Must Know</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Follow these steps to keep your Red Sandalwood plantation fully legal and protected.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sandalwood-200" />
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 relative">
                  <div className="w-12 h-12 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-sm z-10 shrink-0 shadow-md">
                    {step.number}
                  </div>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex-1 hover:shadow-md hover:border-sandalwood-200 transition-all">
                    <h3 className="text-xl font-bold text-forest-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-sandalwood-50 border border-sandalwood-100 rounded-xl px-4 py-2 inline-block">
                      <p className="text-sandalwood-700 text-sm font-semibold">📋 {step.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Banner */}
      <section className="relative isolate overflow-hidden min-h-[300px] flex items-center">
        <img src="/assets/red 13.png" alt="Timber transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center">
          <p className="text-3xl font-bold text-white mb-4">
            &ldquo;Doing it right from the start saves years of trouble later.&rdquo;
          </p>
          <p className="text-forest-200 text-lg">
            SRSGA guides every member through the complete legal process — from registration to sale.
          </p>
        </div>
      </section>

      {/* SRSGA Legal Support */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">How SRSGA Supports You Legally</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📝", title: "Document Preparation", desc: "We help prepare all required forms and documents correctly before submission." },
              { icon: "🏛️", title: "Department Liaison", desc: "We accompany members to forest department offices and assist with applications." },
              { icon: "🔔", title: "Compliance Reminders", desc: "We keep track of important deadlines and notify members when action is needed." },
              { icon: "📞", title: "Legal Query Support", desc: "Any legal question you have — we are one call away with clear, simple answers." },
            ].map((item) => (
              <div key={item.title} className="bg-sandalwood-50 rounded-3xl p-7 border border-sandalwood-100 text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-forest-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img src="/assets/red 2.png" alt="Red Sandalwood tree" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Legal, Stay Protected</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Join SRSGA and let us handle the legal process so you can focus on growing
            your Red Sandalwood plantation with full confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/join-now" className="inline-block bg-sandalwood-600 hover:bg-sandalwood-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-lg">
              Join SRSGA
            </a>
            <a href="/contact" className="inline-block border border-white text-white hover:bg-white hover:text-forest-800 font-bold px-10 py-4 rounded-2xl text-lg transition-colors">
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
