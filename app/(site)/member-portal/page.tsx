import { getMemberPortalPageData } from "@/lib/sanity/queries/memberPortal";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMemberPortalPageData();
  return { title: data?.seo?.metaTitle ?? "Member Portal", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Join Association", href: "/member-portal/join-association", description: "Become a member of the association" },
  { label: "Farmer Registration", href: "/member-portal/farmer-registration", description: "Register as a red sandalwood farmer" },
];

export default async function MemberPortalPage() {
  const data = await getMemberPortalPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Member Portal"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Member Portal" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      {data?.benefits && data.benefits.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-6">
          <h2 className="text-2xl font-bold text-forest-800 mb-4">Membership Benefits</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.benefits.map((benefit: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-sandalwood-600 font-bold mt-0.5">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
      )}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
