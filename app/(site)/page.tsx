import { getHomePageData } from "@/lib/sanity/queries/home";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";



export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  return {
    title: data?.seo?.metaTitle ?? "Sandalwood & Red Sanders Growers Association – AP",
    description: data?.seo?.metaDescription ?? "",
  };
}

const sections = [
  { label: "About Association", href: "/about", description: "Vision, members, and partners of our association" },
  { label: "Knowledge Center", href: "/knowledge-center", description: "Tree information, farming techniques, climate & soil" },
  { label: "Farming Guide", href: "/farming-guide", description: "Nursery, plantation, maintenance, and harvesting" },
  { label: "Legal Guidelines", href: "/legal-guidelines", description: "Forest department rules, registration & permits" },
  { label: "Farmer Training", href: "/farmer-training", description: "Workshops, videos, and PDF guides" },
  { label: "Research & Innovation", href: "/research-innovation", description: "Agroforestry and seed variety research" },
  { label: "Market & Trade", href: "/market-trade", description: "Timber prices and export information" },
  { label: "Member Portal", href: "/member-portal", description: "Join the association or register as a farmer" },
  { label: "Contact Us", href: "/contact", description: "Get in touch with our team" },
];

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white min-h-[650px] flex items-stretch">
        {/* Full-cover background banner */}
        <img
          src="/assets/banner_one.jpeg"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay on the left half for content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/60 to-transparent" />
        {/* Content — left side, above overlay */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 max-w-xl">
          <h1 className="wood3d">
            {data?.heroTitle ?? `GROW RED SANDALWOOD Secure future`}
          </h1>
          <p>Red Sandalwood is not just a tree. It is a long-term support for your family, land, and future income.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/member-portal/join-association"
              className="bg-sandalwood-600 hover:bg-sandalwood-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join SRSGA
            </a>
            <a
              href="/about"
              className="border border-white hover:bg-white hover:text-forest-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn How to grow
            </a>
          </div>
        </div>
      </section>

      {/* Mission + Sections grid — shared background */}
      <div
        className="relative isolate h-[200vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/sectionbg.png')" }}
      >
        <div className="h-[100vh] flex items-end pb-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] gap-0 px-8">
            {/* Why Choose Us — left */}
            <div className="bg-white/80  rounded-2xl p-8 shadow-lg border border-forest-100">
              <h2 className="text-3xl font-bold text-forest-800 mb-4">Why Choose Us</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We understand the needs of farmers. Many growers need clear guidance, trusted support,
                and simple information. That is why SRSGA stands with farmers from the beginning.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Easy guidance for growing Red Sandalwood",
                  "Information about legal process and documentation",
                  "Support for farmers and member benefits",
                  "Help in understanding plantation value and future returns",
                  "A trusted network of growers and experts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-base">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sandalwood-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
            {/* Centre — tree trunk area, keep empty */}
            <div />
            {/* Why Grow Red Sandalwood — right */}
            <div className="bg-white/80  rounded-2xl p-8 shadow-lg border border-forest-100">
              <h2 className="text-3xl font-bold text-forest-800 mb-4">Why Grow Red Sandalwood</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Red Sandalwood is a precious and high-value tree. It is known for its long-term worth
                and importance. For farmers, it can be a smart choice for the future.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "It is a valuable tree crop",
                  "It can increase the value of your land",
                  "It offers long-term future benefits",
                  "It can support family security in the coming years",
                  "It is a strong investment for tomorrow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-base">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sandalwood-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-20 px-8">
          <p className="max-w-4xl text-center text-white font-bold text-2xl leading-relaxed drop-shadow-lg">
            SRSGA (Sandalwood and Red Sanders Growers Association) supports farmers in growing Red Sandalwood
            in a simple and safe way. Red Sandalwood is a valuable tree that can increase land value and help
            farmers build a secure future for their families. Many farmers do not have clear information or
            support, so SRSGA provides easy guidance, helpful support, and simple understanding of the legal
            process. We stand with farmers at every step, from starting plantation to future benefits. By
            growing Red Sandalwood today, farmers can plan for a better tomorrow, and by joining SRSGA, they
            become part of a trusted community that helps them grow with confidence and peace of mind.
          </p>
        </div>

      </div>

      {/* How to Grow Red Sandalwood — Vertical Timeline */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">How to Grow Red Sandalwood</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Follow these simple steps to grow Red Sandalwood successfully on your land.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical centre line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-forest-200" />

            {[
              {
                step: "01",
                title: "Soil Preparation",
                image: "/assets/steps/1.png",
                description:
                  "Red Sandalwood grows best in well-drained, rocky or sandy loam soil. Clear the land, remove weeds, and prepare the soil with deep ploughing. Avoid waterlogged areas. Test the soil pH — it should be between 6 and 8 for best results.",
              },
              {
                step: "02",
                title: "Nursery & Seedling",
                image: "/assets/steps/2.png",
                description:
                  "Obtain quality seeds or seedlings from a certified nursery. Sow seeds in nursery beds or polybags with good soil mix. Water regularly and protect from direct harsh sunlight. Seedlings are ready for transplanting after 3 to 4 months when they reach 20–30 cm height.",
              },
              {
                step: "03",
                title: "Plantation",
                image: "/assets/steps/3.png",
                description:
                  "Transplant seedlings during the monsoon season for best survival. Maintain a spacing of 2×2 metres or 3×3 metres between plants. Dig pits of 30×30×30 cm and fill with topsoil and organic matter. Water the seedlings immediately after planting.",
              },
              {
                step: "04",
                title: "Care & Maintenance",
                image: "/assets/steps/4.png",
                description:
                  "Water young plants regularly for the first two years. Remove weeds around the base of each plant. Apply organic fertiliser once a year. Protect from grazing animals using fencing. Prune dead or weak branches to encourage healthy growth.",
              },
              {
                step: "05",
                title: "Harvesting",
                image: "/assets/steps/5.png",
                description:
                  "Red Sandalwood trees are ready for harvest after 15 to 20 years. The heartwood, which is the most valuable part, develops over time. Harvesting must follow state forest department rules and requires proper permits and documentation. SRSGA helps members with all legal steps during harvest.",
              },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.step} className="relative flex items-stretch mb-16 last:mb-0">
                  {/* Left side — card or image */}
                  <div className="w-1/2 pr-10 flex">
                    {isLeft ? (
                      <div className="bg-sandalwood-50 border border-sandalwood-200 rounded-2xl p-8 shadow-md text-left w-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-forest-800 mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-2xl shadow-md object-cover"
                      />
                    )}
                  </div>

                  {/* Centre step number bubble */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg">
                    {item.step}
                  </div>

                  {/* Right side — image or card */}
                  <div className="w-1/2 pl-10 flex">
                    {!isLeft ? (
                      <div className="bg-sandalwood-50 border border-sandalwood-200 rounded-2xl p-8 shadow-md text-left w-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-forest-800 mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-2xl shadow-md object-cover"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sandalwood-50 py-24 px-4 relative overflow-hidden">
        {/* Large watermark text */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-forest-100 leading-none select-none pointer-events-none pr-4">
          FAQ
        </span>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16">

          {/* Left — sticky title block */}
          <div className="lg:w-1/3 flex flex-col justify-start lg:sticky lg:top-24 self-start">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-5xl font-black text-forest-800 leading-tight mb-6">
              Questions <br />
              <span className="text-sandalwood-600">Farmers</span> <br />
              Ask Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Everything you need to know before you start growing Red Sandalwood with SRSGA.
            </p>            {/* Decorative image below CTA */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-md border border-sandalwood-100">
              <img
                src="/assets/steps/3.png"
                alt="Red Sandalwood Plantation"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:w-2/3 flex flex-col gap-3">
            {[
              {
                q: "What is Red Sandalwood?",
                a: "Red Sandalwood (Pterocarpus santalinus) is a rare and valuable tree native to the Eastern Ghats of Andhra Pradesh, India. It is known for its deep red heartwood, which is used in traditional medicine, cosmetics, religious purposes, and high-value woodwork. It is protected under Indian forest laws due to its high demand and limited natural supply.",
              },
              {
                q: "How long does Red Sandalwood take to grow?",
                a: "Red Sandalwood is a slow-growing tree. It typically takes 15 to 20 years for the tree to develop a mature heartwood that is commercially valuable. However, the long growth period is what makes it a high-value investment — the longer it grows, the more valuable it becomes.",
              },
              {
                q: "Is it legal to grow Red Sandalwood on private land?",
                a: "Yes, it is legal to grow Red Sandalwood on private agricultural land. However, cutting, transporting, or selling the timber requires proper documentation and permits from the State Forest Department. SRSGA guides all members through the legal process to ensure full compliance with Andhra Pradesh forest regulations.",
              },
              {
                q: "What documents are needed to start a plantation?",
                a: "Farmers need land ownership documents (pattadar passbook), an Aadhaar card, and must register their plantation with the local forest department. In some cases, a No Objection Certificate (NOC) may be required. SRSGA helps members prepare and submit all required documents correctly.",
              },
              {
                q: "Can any farmer grow Red Sandalwood?",
                a: "Yes. Any farmer who owns private agricultural land in suitable regions — particularly in Andhra Pradesh and parts of Telangana, Karnataka, and Tamil Nadu — can grow Red Sandalwood. The land should have well-drained, rocky or sandy loam soil with good sunlight. SRSGA will assess your land suitability as part of the registration process.",
              },
              {
                q: "What is the market value of Red Sandalwood?",
                a: "Red Sandalwood heartwood is one of the most valuable timber crops in India. Prices can range from ₹5,000 to ₹15,000 or more per kilogram depending on quality, heartwood percentage, and market demand. The export market also drives high prices globally. SRSGA keeps members updated on current timber prices and market information.",
              },
              {
                q: "How does SRSGA support farmers?",
                a: "SRSGA provides end-to-end support — from land assessment, seedling guidance, and plantation advice to legal documentation, member benefits, and market information. We run training workshops, provide access to expert consultations, and maintain a trusted network of growers so no farmer has to navigate the process alone.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden open:border-sandalwood-400 shadow-sm transition-all"
              >
                <summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none text-forest-800 font-semibold text-lg gap-4 hover:bg-sandalwood-50 transition-colors">
                  <span>{faq.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-gray-300 group-open:border-sandalwood-500 group-open:bg-sandalwood-600 group-open:text-white flex items-center justify-center text-xl font-light transition-all">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-7 pb-6 pt-2 text-gray-600 text-base leading-relaxed border-t border-gray-100 group-open:border-sandalwood-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-block bg-sandalwood-50 text-sandalwood-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sandalwood-200">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Contact Us</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Have a question or want to join SRSGA? We are here to help. Reach out to us and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — contact info cards */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "Our Office",
                  value: "Sandalwood & Red Sanders Growers Association, Andhra Pradesh, India",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 00000 00000",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "info@srsga.in",
                },
                {
                  icon: "🕐",
                  label: "Working Hours",
                  value: "Monday – Saturday, 9:00 AM to 6:00 PM",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 bg-sandalwood-50 shadow-sm">
                  <div className="text-2xl w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-sandalwood-600 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-forest-800 font-medium text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — contact form */}
            <form className="bg-sandalwood-50 border border-sandalwood-100 rounded-3xl p-8 shadow-sm flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-forest-800">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-forest-800">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-forest-800">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-forest-800 hover:bg-forest-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
