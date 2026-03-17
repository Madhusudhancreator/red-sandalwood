import { getContactPageData } from "@/lib/sanity/queries/contact";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactPageData();
  return { title: data?.seo?.metaTitle ?? "Contact Us", description: data?.seo?.metaDescription ?? "" };
}

export default async function ContactPage() {
  const data = await getContactPageData();
  return (
    <>
      <PageHero
        title={data?.title ?? "Contact Us"}
        subtitle={data?.intro ?? "Get in touch with the Sandalwood & Red Sanders Growers Association"}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            {data?.address && (
              <div className="flex gap-3">
                <span className="text-sandalwood-600 text-xl flex-shrink-0">📍</span>
                <div>
                  <h3 className="font-semibold text-forest-800">Address</h3>
                  <p className="text-gray-600 whitespace-pre-line mt-1">{data.address}</p>
                </div>
              </div>
            )}
            {data?.phone && data.phone.length > 0 && (
              <div className="flex gap-3">
                <span className="text-sandalwood-600 text-xl flex-shrink-0">📞</span>
                <div>
                  <h3 className="font-semibold text-forest-800">Phone</h3>
                  {data.phone.map((p: string, i: number) => (
                    <p key={i} className="text-gray-600 mt-1">
                      <a href={`tel:${p}`} className="hover:text-sandalwood-600">{p}</a>
                    </p>
                  ))}
                </div>
              </div>
            )}
            {data?.email && data.email.length > 0 && (
              <div className="flex gap-3">
                <span className="text-sandalwood-600 text-xl flex-shrink-0">✉️</span>
                <div>
                  <h3 className="font-semibold text-forest-800">Email</h3>
                  {data.email.map((e: string, i: number) => (
                    <p key={i} className="text-gray-600 mt-1">
                      <a href={`mailto:${e}`} className="hover:text-sandalwood-600">{e}</a>
                    </p>
                  ))}
                </div>
              </div>
            )}
            {data?.officeHours && (
              <div className="flex gap-3">
                <span className="text-sandalwood-600 text-xl flex-shrink-0">🕐</span>
                <div>
                  <h3 className="font-semibold text-forest-800">Office Hours</h3>
                  <p className="text-gray-600 mt-1">{data.officeHours}</p>
                </div>
              </div>
            )}
            {data?.socialLinks && data.socialLinks.length > 0 && (
              <div className="flex gap-3">
                <span className="text-sandalwood-600 text-xl flex-shrink-0">🔗</span>
                <div>
                  <h3 className="font-semibold text-forest-800">Social Media</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {data.socialLinks.map((s: { platform: string; url: string }, i: number) => (
                      <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-sandalwood-600 hover:underline font-medium">
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {!data && (
              <p className="text-gray-500">Contact information coming soon.</p>
            )}
          </div>

          {/* Map embed */}
          {data?.mapEmbed && (
            <div className="rounded-xl overflow-hidden border border-gray-200 h-80 lg:h-auto">
              <iframe
                src={data.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
