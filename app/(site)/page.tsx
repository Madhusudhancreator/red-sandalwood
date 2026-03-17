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
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-sandalwood-500 mb-4">
            {data?.heroTitle ?? "Sandalwood & Red Sanders Growers Association"}
          </h1>
          <p className="text-xl text-forest-100 max-w-3xl mx-auto">
            {data?.heroSubtitle ?? "Supporting red sandalwood farmers across Andhra Pradesh"}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/member-portal/join-association"
              className="bg-sandalwood-600 hover:bg-sandalwood-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Association
            </a>
            <a
              href="/about"
              className="border border-white hover:bg-white hover:text-forest-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      {data?.missionStatement && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-forest-800 mb-6 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <PortableTextRenderer body={data.missionStatement} />
          </div>
        </section>
      )}

      {/* Sections grid */}
      <section className="bg-sandalwood-50 py-4">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <h2 className="text-2xl font-bold text-forest-800 mb-2">Explore Our Resources</h2>
          <p className="text-gray-600 mb-6">Everything you need to grow and trade red sandalwood successfully.</p>
        </div>
        <SectionIndexGrid links={sections} />
      </section>
    </>
  );
}
