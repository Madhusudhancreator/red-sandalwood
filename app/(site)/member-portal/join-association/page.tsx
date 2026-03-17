import { getJoinAssociationData } from "@/lib/sanity/queries/memberPortal";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJoinAssociationData();
  return { title: data?.seo?.metaTitle ?? "Join Association", description: data?.seo?.metaDescription ?? "" };
}

export default async function JoinAssociationPage() {
  const data = await getJoinAssociationData();
  return (
    <>
      <PageHero title={data?.title ?? "Join the Association"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Member Portal", href: "/member-portal" }, { label: "Join Association" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.membershipFees && (
          <div className="mt-8 bg-sandalwood-50 border border-sandalwood-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-forest-800 mb-4">Membership Fees</h2>
            <PortableTextRenderer body={data.membershipFees} />
          </div>
        )}
        {data?.applicationFormEmbed && (
          <div className="mt-8">
            <a href={data.applicationFormEmbed} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-sandalwood-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sandalwood-700 transition-colors">
              Apply for Membership →
            </a>
          </div>
        )}
        {!data?.body && <p className="text-gray-500">Information coming soon.</p>}
      </section>
    </>
  );
}
