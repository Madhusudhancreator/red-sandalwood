import { getFarmerRegistrationData } from "@/lib/sanity/queries/memberPortal";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFarmerRegistrationData();
  return { title: data?.seo?.metaTitle ?? "Farmer Registration", description: data?.seo?.metaDescription ?? "" };
}

export default async function FarmerRegistrationPage() {
  const data = await getFarmerRegistrationData();
  return (
    <>
      <PageHero title={data?.title ?? "Farmer Registration"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Member Portal", href: "/member-portal" }, { label: "Farmer Registration" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.eligibility && (
          <div className="mt-8 bg-forest-50 border border-forest-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-forest-800 mb-4">Eligibility Criteria</h2>
            <PortableTextRenderer body={data.eligibility} />
          </div>
        )}
        {data?.registrationFormEmbed && (
          <div className="mt-8">
            <a href={data.registrationFormEmbed} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-800 transition-colors">
              Register as Farmer →
            </a>
          </div>
        )}
        {!data?.body && <p className="text-gray-500">Information coming soon.</p>}
      </section>
    </>
  );
}
