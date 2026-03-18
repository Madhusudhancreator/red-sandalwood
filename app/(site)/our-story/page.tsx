import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story – SRSGA",
  description:
    "Learn the story behind the Sandalwood and Red Sanders Growers Association of Andhra Pradesh — who we are, why we started, and what drives us.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[560px] flex items-end">
        <img
          src="/assets/red 9.png"
          alt="Red Sandalwood Plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="inline-block bg-sandalwood-500/20 border border-sandalwood-400/40 text-sandalwood-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About SRSGA
          </div>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">
            Our Story
          </h1>
          <p className="text-forest-200 text-xl max-w-2xl leading-relaxed">
            A movement started by farmers, for farmers — rooted in the land of Andhra Pradesh
            and built on the belief that every grower deserves guidance, support, and a secure future.
          </p>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Where It All Began</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Red Sandalwood has grown in the soils of Andhra Pradesh for centuries. Yet for
              generations, the farmers who tended this precious tree had no organised support —
              no guidance on legal processes, no network of fellow growers, and no clear path
              to earning its true value.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              SRSGA was founded to change that. A group of farmers, agricultural experts, and
              community leaders came together with a single purpose: to make Red Sandalwood
              farming accessible, legal, and rewarding for every grower in Andhra Pradesh.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From that first gathering, we have grown into a trusted association that guides
              farmers at every step — from preparing the soil to understanding their rights and
              securing the future of their families.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/red 6.png"
              alt="Farmers planting Red Sandalwood"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-forest-800 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Registered Members" },
            { number: "12+", label: "Districts Covered" },
            { number: "1000+", label: "Acres Under Plantation" },
            { number: "15+", label: "Years of Combined Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-black text-sandalwood-400 mb-2">{stat.number}</p>
              <p className="text-forest-200 text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Tree — split layout */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src="/assets/red 2.png"
              alt="Mature Red Sandalwood Tree"
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">The Tree Behind Our Purpose</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Pterocarpus santalinus — commonly known as Red Sandalwood or Lal Chandan — is
              one of the most valuable and protected tree species in India. Native to the
              Eastern Ghats of Andhra Pradesh, this tree is prized for its striking red
              heartwood, which has been used for centuries in traditional medicine, religious
              practices, and fine craftsmanship.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              It grows slowly, patiently, and rewards those who care for it with extraordinary
              long-term value. For SRSGA, it is more than a tree — it is the foundation of
              livelihoods, the future of families, and the heart of our mission.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Scientific Name", value: "Pterocarpus santalinus" },
                { label: "Native Region", value: "Eastern Ghats, AP" },
                { label: "Maturity Period", value: "15 – 20 Years" },
                { label: "IUCN Status", value: "Endangered Species" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-sandalwood-100 shadow-sm">
                  <p className="text-xs font-semibold text-sandalwood-600 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-forest-800 font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roots Section — full width image with overlay text */}
      <section className="relative isolate overflow-hidden min-h-[420px] flex items-center">
        <img
          src="/assets/red 7.png"
          alt="Red Sandalwood roots"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Roots Run Deep</h2>
          <p className="text-forest-200 text-xl leading-relaxed">
            Just as the Red Sandalwood tree draws strength from deep roots, SRSGA is grounded
            in community, trust, and the shared determination of farmers who believe that
            working together is the only way to grow.
          </p>
        </div>
      </section>

      {/* What We Do — 3 pillars */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">What SRSGA Does</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Three core commitments that guide everything we do for our members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/assets/red 5.png",
                title: "Guide Farmers",
                description:
                  "We provide clear, step-by-step guidance on soil preparation, plantation techniques, watering schedules, and crop maintenance so every farmer can grow with confidence.",
              },
              {
                image: "/assets/red 8.png",
                title: "Protect Growers",
                description:
                  "We help members navigate the legal process — from land registration and forest department documentation to permits required for harvesting and transport.",
              },
              {
                image: "/assets/red 10.png",
                title: "Build Community",
                description:
                  "We connect farmers with each other, with experts, and with market networks so no grower has to face challenges alone. Together, we grow stronger.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-3xl overflow-hidden shadow-md border border-gray-100 group">
                <div className="overflow-hidden h-52">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 bg-sandalwood-50">
                  <h3 className="text-xl font-bold text-forest-800 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Wood — image grid */}
      <section className="bg-sandalwood-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full mx-auto" />
            <h2 className="text-4xl font-bold text-forest-800 mb-4">The Value of Red Sandalwood</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The deep red heartwood of this tree is one of the most sought-after materials
              in traditional medicine, cosmetics, religious use, and fine woodworking globally.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/assets/red 16.png", alt: "Red Sandalwood cross section", caption: "Rich Heartwood" },
              { src: "/assets/red 3.png", alt: "Cut Red Sandalwood logs", caption: "Harvested Timber" },
              { src: "/assets/red 18.png", alt: "Red Sandalwood products", caption: "Finished Products" },
              { src: "/assets/red 15.jpg", alt: "Deep red sandalwood logs", caption: "Deep Red Colour" },
            ].map((img) => (
              <div key={img.caption} className="rounded-2xl overflow-hidden shadow-md group relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-900/80 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-sandalwood-500 mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Our Vision for the Future</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We envision an Andhra Pradesh where every farmer who wants to grow Red Sandalwood
              has the knowledge, legal support, and community network to do so successfully
              and sustainably.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We are working towards expanding our reach to more districts, building stronger
              partnerships with the State Forest Department, and creating direct market access
              for our members so they receive the true value of their harvest.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By growing Red Sandalwood today, farmers are planting the seeds of prosperity
              for themselves, their children, and the generations that follow. SRSGA will
              be with them at every step of that journey.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/join-now"
                className="bg-forest-800 hover:bg-forest-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Join SRSGA Today
              </a>
              <a
                href="/contact"
                className="border border-forest-800 text-forest-800 hover:bg-forest-50 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Talk to Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/red 1.png" alt="Young plantation" className="rounded-2xl h-56 w-full object-cover shadow-md" />
            <img src="/assets/red 19.png" alt="Young sandalwood leaves" className="rounded-2xl h-56 w-full object-cover shadow-md mt-8" />
            <img src="/assets/red 4.png" alt="Processing timber" className="rounded-2xl h-56 w-full object-cover shadow-md -mt-4" />
            <img src="/assets/red 20.png" alt="Sandalwood leaves close up" className="rounded-2xl h-56 w-full object-cover shadow-md mt-4" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative isolate overflow-hidden py-24 px-4">
        <img
          src="/assets/red 19.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Become Part of Our Story</h2>
          <p className="text-forest-200 text-xl leading-relaxed mb-10">
            Join hundreds of farmers who are already growing Red Sandalwood with the
            guidance and support of SRSGA. Your story starts here.
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
