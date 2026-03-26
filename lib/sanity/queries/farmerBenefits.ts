import { safeFetch } from "../client";

export interface FarmerBenefit {
  title: string;
  description: string;
}

export interface FarmerStat {
  value: string;
  label: string;
}

export interface FarmerBenefitsPageData {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introBody: string;
  benefitsTitle: string;
  benefits: FarmerBenefit[];
  stats: FarmerStat[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: FarmerBenefitsPageData = {
  heroTitle: "Member Benefits",
  heroSubtitle:
    "From the day you plant your first sapling to the day you harvest — SRSGA is with you every step of the way.",
  introTitle: "Built for Farmers, Run by Farmers",
  introBody:
    "Every benefit SRSGA provides comes from real grower needs. We built our membership around what farmers actually struggle with: legal confusion, sapling quality, maintenance know-how, and market access. Here's what you get as a member.",
  benefitsTitle: "What You Get as a Member",
  benefits: [
    {
      title: "Legal Registration Support",
      description:
        "Full guidance on obtaining Forest Department permits, plantation registration, and transit documents — handled by our experienced legal team.",
    },
    {
      title: "Certified Sapling Supply",
      description:
        "Access to verified, disease-free Red Sandalwood saplings from approved nurseries with guaranteed origin certification.",
    },
    {
      title: "12 Years Free Maintenance",
      description:
        "Expert agronomists visit your plantation regularly for the first 12 years — monitoring growth, treating issues, and adjusting care.",
    },
    {
      title: "Soil & Site Assessment",
      description:
        "A professional site evaluation before planting to ensure your land is suitable and properly prepared for Red Sandalwood.",
    },
    {
      title: "Expert Training Workshops",
      description:
        "Regular training sessions led by forest officers, experienced growers, and agronomists — in Telugu and English.",
    },
    {
      title: "Farmer Community Network",
      description:
        "Connect with 500+ SRSGA members across AP to share experiences, get advice, and support each other.",
    },
    {
      title: "Harvest & Market Guidance",
      description:
        "When your trees are ready, we assist with felling permits and connect you with reputable buyers for the best returns.",
    },
    {
      title: "Government Scheme Assistance",
      description:
        "We help members access relevant state and central government schemes, subsidies, and support programmes for agricultural forestry.",
    },
  ],
  stats: [
    { value: "500+", label: "Active Members" },
    { value: "12+", label: "Districts Served" },
    { value: "12 Yrs", label: "Free Maintenance" },
    { value: "100%", label: "Legal Compliance" },
  ],
};

export async function getFarmerBenefitsPageData(): Promise<FarmerBenefitsPageData> {
  const data = await safeFetch(
    `*[_type == "farmerBenefitsPage"][0]{
      heroTitle, heroSubtitle,
      introTitle, introBody,
      benefitsTitle,
      benefits[]{ title, description },
      stats[]{ value, label },
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["farmerBenefitsPage"] } }
  ) as Partial<FarmerBenefitsPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    introTitle: data.introTitle || FALLBACK.introTitle,
    introBody: data.introBody || FALLBACK.introBody,
    benefitsTitle: data.benefitsTitle || FALLBACK.benefitsTitle,
    benefits:
      data.benefits && data.benefits.length > 0 ? data.benefits : FALLBACK.benefits,
    stats: data.stats && data.stats.length > 0 ? data.stats : FALLBACK.stats,
    seo: data.seo,
  };
}
