import { getFarmerTrainingPageData } from "@/lib/sanity/queries/farmerTraining";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFarmerTrainingPageData();
  return { title: data?.seo?.metaTitle ?? "Farmer Training", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Workshops", href: "/farmer-training/workshops", description: "Upcoming and past training workshops" },
  { label: "Videos", href: "/farmer-training/videos", description: "Video tutorials and training materials" },
  { label: "PDF Guides", href: "/farmer-training/pdf-guides", description: "Downloadable guides and reference materials" },
];

export default async function FarmerTrainingPage() {
  const data = await getFarmerTrainingPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Farmer Training"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Farmer Training" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
