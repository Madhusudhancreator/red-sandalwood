import { getMarketTradePageData } from "@/lib/sanity/queries/marketTrade";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMarketTradePageData();
  return { title: data?.seo?.metaTitle ?? "Market & Trade", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Timber Prices", href: "/market-trade/timber-prices", description: "Current market prices for red sandalwood timber" },
  { label: "Export Information", href: "/market-trade/export-information", description: "Guidelines and requirements for exporting red sandalwood" },
];

export default async function MarketTradePage() {
  const data = await getMarketTradePageData();
  return (
    <>
      <PageHero title={data?.title ?? "Market & Trade"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Market & Trade" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
