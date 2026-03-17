import { getPartnersData } from "@/lib/sanity/queries/about";
import { PageHero } from "@/components/ui/PageHero";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Partners – Sandalwood & Red Sanders Growers Association",
};

export default async function PartnersPage() {
  const partners = await getPartnersData();
  return (
    <>
      <PageHero
        title="Our Partners"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Partners" }]}
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {!partners || partners.length === 0 ? (
          <p className="text-gray-500">Partner information coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p: { _id: string; name: string; logo?: object; website?: string; description?: string }) => (
              <div key={p._id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                {p.logo && (
                  <Image
                    src={urlFor(p.logo).width(160).height(80).url()}
                    alt={p.name}
                    width={160}
                    height={80}
                    className="object-contain mb-4 h-16 w-auto"
                  />
                )}
                <h3 className="font-semibold text-forest-800">{p.name}</h3>
                {p.description && <p className="text-sm text-gray-600 mt-2">{p.description}</p>}
                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sandalwood-600 hover:underline mt-2 inline-block"
                  >
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
