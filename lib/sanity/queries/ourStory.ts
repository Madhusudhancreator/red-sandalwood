import { safeFetch } from "../client";

export interface OurStoryStat {
  value: string;
  label: string;
  description: string;
}

export interface OurStoryPillar {
  title: string;
  description: string;
}

export interface OurStoryPageData {
  heroTitle: string;
  heroSubtitle: string;
  beginningTitle: string;
  beginningBody: string;
  stats: OurStoryStat[];
  treeTitle: string;
  treeBody: string;
  rootsTitle: string;
  rootsBody: string;
  pillarsTitle: string;
  pillars: OurStoryPillar[];
  visionTitle: string;
  visionBody: string;
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: OurStoryPageData = {
  heroTitle: "Our Story",
  heroSubtitle:
    "A movement started by farmers, for farmers — rooted in the land of Andhra Pradesh and built on the belief that every grower deserves guidance, support, and a secure future.",
  beginningTitle: "Where It All Began",
  beginningBody:
    "SRSGA was born out of a simple but powerful idea: farmers in Andhra Pradesh who want to grow Red Sandalwood deserve proper guidance, legal support, and a trusted community. Our founders — themselves growers — recognised the confusion and risk that came from navigating cultivation alone. In 2018, they brought together a small group of passionate farmers, legal advisors, and agricultural experts to build something different.",
  stats: [
    { value: "500+", label: "Registered Members", description: "Farmers across AP districts" },
    { value: "12+", label: "Districts Covered", description: "Active presence across Andhra Pradesh" },
    { value: "7+", label: "Years of Experience", description: "Supporting growers since 2018" },
    { value: "₹0", label: "Hidden Fees", description: "Transparent membership structure" },
  ],
  treeTitle: "The Tree Behind Our Purpose",
  treeBody:
    "Red Sandalwood (Pterocarpus santalinus) is one of the rarest and most valuable trees in the world — and Andhra Pradesh is its only natural home. Despite its immense value, many farmers were unable to benefit from growing it due to complex legal requirements and lack of trusted guidance. SRSGA exists to bridge that gap.",
  rootsTitle: "Our Roots Run Deep",
  rootsBody:
    "From our first office in Tirupati to a network spanning 12+ districts, SRSGA has grown because of the trust our members place in us. Every policy we advocate, every workshop we conduct, and every member we support comes back to one mission: making Red Sandalwood cultivation accessible, legal, and profitable for the farmers of Andhra Pradesh.",
  pillarsTitle: "What SRSGA Does",
  pillars: [
    {
      title: "Guides Farmers",
      description:
        "We provide step-by-step guidance on soil preparation, sapling sourcing, planting schedules, and long-term tree care — so no farmer has to figure it out alone.",
    },
    {
      title: "Ensures Legal Compliance",
      description:
        "Our legal team helps members obtain the correct permits, registrations, and transit documents required under AP state law — protecting their investment.",
    },
    {
      title: "Builds a Support Network",
      description:
        "Members gain access to a community of experienced growers, government liaisons, and agricultural experts who share knowledge and advocate for farmers' rights.",
    },
  ],
  visionTitle: "Our Vision for the Future",
  visionBody:
    "We believe that within the next decade, Red Sandalwood cultivation will become a mainstream, dignified livelihood for thousands of farmers across Andhra Pradesh. SRSGA is committed to making that future a reality — through advocacy, education, and unwavering member support.",
};

export async function getOurStoryPageData(): Promise<OurStoryPageData> {
  const data = await safeFetch(
    `*[_type == "ourStoryPage"][0]{
      heroTitle, heroSubtitle,
      beginningTitle, beginningBody,
      stats[]{ value, label, description },
      treeTitle, treeBody,
      rootsTitle, rootsBody,
      pillarsTitle,
      pillars[]{ title, description },
      visionTitle, visionBody,
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["ourStoryPage"] } }
  ) as Partial<OurStoryPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    beginningTitle: data.beginningTitle || FALLBACK.beginningTitle,
    beginningBody: data.beginningBody || FALLBACK.beginningBody,
    stats: data.stats && data.stats.length > 0 ? data.stats : FALLBACK.stats,
    treeTitle: data.treeTitle || FALLBACK.treeTitle,
    treeBody: data.treeBody || FALLBACK.treeBody,
    rootsTitle: data.rootsTitle || FALLBACK.rootsTitle,
    rootsBody: data.rootsBody || FALLBACK.rootsBody,
    pillarsTitle: data.pillarsTitle || FALLBACK.pillarsTitle,
    pillars: data.pillars && data.pillars.length > 0 ? data.pillars : FALLBACK.pillars,
    visionTitle: data.visionTitle || FALLBACK.visionTitle,
    visionBody: data.visionBody || FALLBACK.visionBody,
    seo: data.seo,
  };
}
