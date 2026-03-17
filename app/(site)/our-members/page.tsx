import { getOurMembersPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { PageHero } from "@/components/ui/PageHero";

export default async function OurMembersPage() {
  const page = await getOurMembersPageData();
  return (
    <>
      <PageHero title="Our Members" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-4" />
            {page.intro && (
              <LocaleString value={page.intro} tag="p" className="text-lg text-gray-600 mb-6" />
            )}
          </>
        ) : (
          <p className="text-gray-600">
            Meet the farmers and members of our association — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
