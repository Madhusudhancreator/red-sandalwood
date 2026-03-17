import { getLegalGuidelinesPageData } from "@/lib/sanity/queries/legalGuidelines";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLegalGuidelinesPageData();
  return { title: data?.seo?.metaTitle ?? "Legal Guidelines", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Forest Department Rules", href: "/legal-guidelines/forest-department-rules", description: "Regulations from the AP Forest Department" },
  { label: "Tree Registration", href: "/legal-guidelines/tree-registration", description: "How to register your red sandalwood trees" },
  { label: "Transport Permits", href: "/legal-guidelines/transport-permits", description: "Required permits for transporting timber" },
];

export default async function LegalGuidelinesPage() {
  const data = await getLegalGuidelinesPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Legal Guidelines"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Legal Guidelines" }]} />
      {data?.importantNotice && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 max-w-7xl mx-auto px-8 mt-6">
          <p className="text-amber-800 font-medium">⚠️ Important Notice</p>
          <p className="text-amber-700 text-sm mt-1">{data.importantNotice}</p>
        </div>
      )}
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
