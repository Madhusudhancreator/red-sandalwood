import { getJoinNowPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function JoinNowPage() {
  const page = await getJoinNowPageData();
  return (
    <>
      <PageHero title="Join Now" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-6" />
            <LocaleBlock value={page.body} />
            {page.membershipFees && (
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-forest-800 mb-4">Membership Fees</h2>
                <LocaleBlock value={page.membershipFees} />
              </section>
            )}
            {page.applicationFormEmbed && (
              <section className="mt-10">
                <iframe
                  src={page.applicationFormEmbed}
                  className="w-full min-h-[600px] border-0 rounded-lg"
                  title="Application Form"
                />
              </section>
            )}
          </>
        ) : (
          <p className="text-gray-600">
            Become a member of the Sandalwood &amp; Red Sanders Growers Association — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
