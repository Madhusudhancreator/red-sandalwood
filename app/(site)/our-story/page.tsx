import { getOurStoryPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function OurStoryPage() {
  const page = await getOurStoryPageData();
  return (
    <>
      <PageHero title="Our Story" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-6" />
            <LocaleBlock value={page.body} />
          </>
        ) : (
          <p className="text-gray-600">
            The story of the Sandalwood &amp; Red Sanders Growers Association of Andhra Pradesh — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
