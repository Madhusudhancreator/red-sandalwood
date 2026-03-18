import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Members – SRSGA",
  description:
    "Meet the Red Sandalwood farmers and members who are part of the SRSGA community in Andhra Pradesh.",
};

const memberTypes = [
  {
    icon: "🌱",
    title: "New Farmers",
    description:
      "Farmers who are just starting their Red Sandalwood plantation journey. They receive full onboarding support, land assessment, and step-by-step guidance from SRSGA.",
  },
  {
    icon: "🌳",
    title: "Active Growers",
    description:
      "Members with active plantations at various growth stages. They receive maintenance guidance, regular training updates, and legal compliance support.",
  },
  {
    icon: "🏆",
    title: "Senior Members",
    description:
      "Experienced farmers with mature plantations approaching harvest. They contribute knowledge to the community and receive full harvest and trade support.",
  },
  {
    icon: "🤝",
    title: "Community Partners",
    description:
      "Agricultural experts, legal advisors, and forest department liaisons who support SRSGA members with specialised knowledge and services.",
  },
];

const districts = [
  "Kadapa", "Kurnool", "Chittoor", "Nellore", "Prakasam",
  "Guntur", "Krishna", "West Godavari", "East Godavari", "Vizianagaram",
  "Srikakulam", "Visakhapatnam",
];

const memberBenefits = [
  "Free farming and legal guidance",
  "Access to exclusive member training sessions",
  "Regular market price and trade updates",
  "Personal SRSGA member ID and certificate",
  "Direct line to SRSGA support team",
  "Invitation to SRSGA farmer network events",
];

export default function OurMembersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[520px] flex items-end">
        <img
          src="/assets/red 9.png"
          alt="Aerial plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Community
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Our Members</h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            SRSGA is built by farmers, for farmers. Every member is part of a trusted community
            working together to grow Red Sandalwood successfully and securely.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-800 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Registered Members" },
            { number: "12+", label: "Districts Represented" },
            { number: "1000+", label: "Acres Under Cultivation" },
            { number: "100%", label: "Legally Compliant" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-black text-sandalwood-400 mb-2">{s.number}</p>
              <p className="text-forest-200 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro split */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">
              A Community of Farmers Growing Together
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              SRSGA members come from all across Andhra Pradesh — farmers with small plots
              and large ones, beginners just planting their first seedlings and experienced
              growers with mature plantations ready for harvest.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              What unites them is a shared commitment to growing Red Sandalwood the right
              way — legally, sustainably, and with the support of fellow farmers who understand
              the journey.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Together, SRSGA members are building something lasting — not just for themselves,
              but for their families and the generations that follow.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 6.png"
              alt="Farmers working together"
              className="w-full h-[460px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Member Types */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Types of Members</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              SRSGA welcomes farmers at every stage of their Red Sandalwood journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberTypes.map((m) => (
              <div key={m.title} className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-sandalwood-200 transition-all text-center">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts + Benefits split */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Districts */}
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-3xl font-bold text-forest-800 mb-6">Districts We Cover</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              SRSGA currently supports members across 12+ districts of Andhra Pradesh,
              with plans to expand further.
            </p>
            <div className="flex flex-wrap gap-3">
              {districts.map((d) => (
                <span key={d} className="bg-sandalwood-50 border border-sandalwood-200 text-forest-800 font-semibold text-sm px-4 py-2 rounded-full">
                  {d}
                </span>
              ))}
            </div>
          </div>
          {/* Member Benefits */}
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-3xl font-bold text-forest-800 mb-6">What Members Receive</h2>
            <ul className="space-y-4">
              {memberBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-sandalwood-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="/join-now"
              className="mt-10 inline-block bg-forest-800 hover:bg-forest-700 text-white font-bold px-8 py-4 rounded-2xl text-base transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-sandalwood-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/assets/red 5.png", alt: "Farmers watering plants" },
            { src: "/assets/red 8.png", alt: "Plantation rows" },
            { src: "/assets/red 1.png", alt: "Young seedlings" },
            { src: "/assets/red 10.png", alt: "Mature plantation" },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden shadow-md">
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img src="/assets/red 9.png" alt="Plantation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-900/82" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Growing Community</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Become an SRSGA member today and join hundreds of farmers who are building
            a secure future through Red Sandalwood cultivation.
          </p>
          <a href="/join-now" className="inline-block bg-sandalwood-600 hover:bg-sandalwood-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-lg">
            Join SRSGA Now
          </a>
        </div>
      </section>
    </>
  );
}
