import { getMembersData } from "@/lib/sanity/queries/about";
import { PageHero } from "@/components/ui/PageHero";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Members – Sandalwood & Red Sanders Growers Association",
};

export default async function MembersPage() {
  const members = await getMembersData();
  return (
    <>
      <PageHero
        title="Our Members"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Members" }]}
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {!members || members.length === 0 ? (
          <p className="text-gray-500">Member information coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m: { _id: string; name: string; role?: string; bio?: string; photo?: object }) => (
              <div key={m._id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4">
                {m.photo && (
                  <Image
                    src={urlFor(m.photo).width(80).height(80).url()}
                    alt={m.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-forest-800">{m.name}</h3>
                  {m.role && <p className="text-sm text-sandalwood-600">{m.role}</p>}
                  {m.bio && <p className="text-sm text-gray-600 mt-2">{m.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
