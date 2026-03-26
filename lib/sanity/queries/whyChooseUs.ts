import { safeFetch } from "../client";

export interface WhyReason {
  title: string;
  description: string;
}

export interface ComparisonRow {
  aspect: string;
  withSrsga: string;
  alone: string;
}

export interface SupportStep {
  title: string;
  description: string;
}

export interface WhyChooseUsPageData {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introBody: string;
  reasonsTitle: string;
  reasons: WhyReason[];
  quoteText: string;
  comparisonTitle: string;
  comparisonRows: ComparisonRow[];
  supportTitle: string;
  supportSteps: SupportStep[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: WhyChooseUsPageData = {
  heroTitle: "Why Choose SRSGA",
  heroSubtitle:
    "Not all guidance is equal. SRSGA gives Red Sandalwood farmers the legal clarity, expert support, and trusted community they need to grow with confidence.",
  introTitle: "The Difference Experience Makes",
  introBody:
    "Thousands of farmers in Andhra Pradesh are interested in Red Sandalwood cultivation — but very few know how to do it legally, safely, and profitably. SRSGA bridges that gap with structured support, a network of verified experts, and years of on-ground experience.",
  reasonsTitle: "6 Reasons Farmers Choose SRSGA",
  reasons: [
    {
      title: "Legal Compliance Built-In",
      description:
        "We handle the complex paperwork — Forest Department registrations, transit permits, and compliance checks — so you don't have to.",
    },
    {
      title: "Verified Sapling Supply",
      description:
        "We connect you with certified, disease-free saplings from trusted nurseries — reducing early-stage risks significantly.",
    },
    {
      title: "12 Years Free Maintenance Support",
      description:
        "Our experts visit your plantation, monitor tree health, and guide you through every growth stage for 12 full years.",
    },
    {
      title: "Expert-Led Training",
      description:
        "Regular workshops and field visits from agronomists, forest officers, and experienced growers keep you informed and confident.",
    },
    {
      title: "Member Network of 500+ Growers",
      description:
        "Connect with other Red Sandalwood farmers across AP — share experiences, resolve challenges, and grow together.",
    },
    {
      title: "Transparent & Trustworthy",
      description:
        "No hidden fees, no false promises. SRSGA is a member-run association with full accountability to our farming community.",
    },
  ],
  quoteText:
    "\"Farmers who joined SRSGA stopped worrying about the paperwork and started focusing on their trees. That shift in confidence is everything.\"",
  comparisonTitle: "SRSGA vs. Going Alone",
  comparisonRows: [
    {
      aspect: "Legal Registration",
      withSrsga: "Guided and completed for you",
      alone: "Complex, often missed",
    },
    {
      aspect: "Sapling Quality",
      withSrsga: "Certified, disease-free saplings",
      alone: "Unverified, high failure risk",
    },
    {
      aspect: "Plantation Maintenance",
      withSrsga: "12 years of expert support",
      alone: "No ongoing guidance",
    },
    {
      aspect: "Compliance Updates",
      withSrsga: "Automatic alerts & guidance",
      alone: "Often unaware of changes",
    },
    {
      aspect: "Harvesting Support",
      withSrsga: "Permit assistance + market guidance",
      alone: "Complex, risky process",
    },
    {
      aspect: "Community",
      withSrsga: "500+ member network",
      alone: "Isolated experience",
    },
  ],
  supportTitle: "How We Support You",
  supportSteps: [
    {
      title: "Initial Consultation",
      description:
        "We assess your land, understand your goals, and provide personalised advice on whether Red Sandalwood cultivation is right for you.",
    },
    {
      title: "Legal Registration & Permits",
      description:
        "Our team guides you through every government form, registration, and permit required before you plant a single sapling.",
    },
    {
      title: "Sapling Procurement & Planting",
      description:
        "We connect you with verified nurseries and oversee the planting process to ensure correct spacing, depth, and soil conditions.",
    },
    {
      title: "Ongoing Maintenance Visits",
      description:
        "Our agronomists visit your plantation regularly to monitor growth, treat pests, and adjust care routines based on real conditions.",
    },
    {
      title: "Harvest & Market Support",
      description:
        "When your trees mature, we help you obtain felling permits and connect you with the right buyers for maximum returns.",
    },
  ],
};

export async function getWhyChooseUsPageData(): Promise<WhyChooseUsPageData> {
  const data = await safeFetch(
    `*[_type == "whyChooseUsPage"][0]{
      heroTitle, heroSubtitle,
      introTitle, introBody,
      reasonsTitle,
      reasons[]{ title, description },
      quoteText,
      comparisonTitle,
      comparisonRows[]{ aspect, withSrsga, alone },
      supportTitle,
      supportSteps[]{ title, description },
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["whyChooseUsPage"] } }
  ) as Partial<WhyChooseUsPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    introTitle: data.introTitle || FALLBACK.introTitle,
    introBody: data.introBody || FALLBACK.introBody,
    reasonsTitle: data.reasonsTitle || FALLBACK.reasonsTitle,
    reasons: data.reasons && data.reasons.length > 0 ? data.reasons : FALLBACK.reasons,
    quoteText: data.quoteText || FALLBACK.quoteText,
    comparisonTitle: data.comparisonTitle || FALLBACK.comparisonTitle,
    comparisonRows:
      data.comparisonRows && data.comparisonRows.length > 0
        ? data.comparisonRows
        : FALLBACK.comparisonRows,
    supportTitle: data.supportTitle || FALLBACK.supportTitle,
    supportSteps:
      data.supportSteps && data.supportSteps.length > 0
        ? data.supportSteps
        : FALLBACK.supportSteps,
    seo: data.seo,
  };
}
