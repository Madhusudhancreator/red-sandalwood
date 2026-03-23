import type { PortableTextBlock } from "@portabletext/react";
import { safeFetch } from "../client";

export type HomePageLink = {
  label?: string;
  href?: string;
};

export type HomePageStat = {
  value: string;
  label: string;
};

export type HomePageFeature = {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
};

export type HomePageJourneyStep = {
  step: string;
  title: string;
  description: string;
  image?: unknown;
};

export type HomePageFaq = {
  question: string;
  answer: string;
};

export type HomePageData = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: unknown;
  heroPrimaryCta: HomePageLink;
  heroSecondaryCta: HomePageLink;
  stats: HomePageStat[];
  missionEyebrow: string;
  missionTitle: string;
  missionStatement: PortableTextBlock[];
  keyPoints: string[];
  featuredSectionTitle: string;
  featuredSectionSubtitle: string;
  featuredSections: HomePageFeature[];
  journeyTitle: string;
  journeySubtitle: string;
  journeySteps: HomePageJourneyStep[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: HomePageFaq[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: HomePageLink;
  ctaSecondary: HomePageLink;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

const fallbackHomePageData: HomePageData = {
  heroEyebrow: "Grow with confidence",
  heroTitle: "Grow Red Sandalwood with trusted guidance and legal clarity.",
  heroSubtitle:
    "SRSGA helps farmers across Andhra Pradesh plan, plant, protect, and grow long-term value from Red Sandalwood cultivation.",
  heroPrimaryCta: { label: "Join SRSGA", href: "/join-now" },
  heroSecondaryCta: { label: "Explore Our Story", href: "/our-story" },
  stats: [
    { value: "500+", label: "Registered members" },
    { value: "12+", label: "Districts covered" },
    { value: "1000+", label: "Acres supported" },
  ],
  missionEyebrow: "Why farmers trust us",
  missionTitle: "A single support system for every stage of the plantation journey.",
  missionStatement: [
    {
      _type: "block",
      _key: "mission-1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "mission-1-span",
          text: "SRSGA supports farmers with practical cultivation guidance, documentation help, and a trusted network built around Red Sandalwood success.",
          marks: [],
        },
      ],
    },
  ],
  keyPoints: [
    "Practical cultivation guidance for new and existing growers",
    "Help with plantation registration, permits, and compliance",
    "Member support for planning, documentation, and future returns",
    "A trusted farmer network across Andhra Pradesh",
  ],
  featuredSectionTitle: "Explore SRSGA",
  featuredSectionSubtitle: "Guide visitors to the most important areas of the website from one homepage flow.",
  featuredSections: [
    {
      title: "Why Choose Us",
      description: "See how SRSGA supports farmers with practical guidance, legal clarity, and trusted community support.",
      link: "/why-choose-us",
      linkLabel: "Why SRSGA",
    },
    {
      title: "Farmer Benefits",
      description: "Understand the direct benefits members receive, from training and support to long-term value planning.",
      link: "/farmer-benefits",
      linkLabel: "View benefits",
    },
    {
      title: "Legal Steps",
      description: "Review the process for registration, permissions, harvest preparation, and transport compliance.",
      link: "/legal-steps",
      linkLabel: "See legal steps",
    },
  ],
  journeyTitle: "How the journey works",
  journeySubtitle: "Show farmers the path from first interest to long-term plantation success.",
  journeySteps: [
    {
      step: "01",
      title: "Plan Your Plantation",
      description: "Understand the land, soil suitability, spacing, and long-term value of Red Sandalwood before you begin.",
    },
    {
      step: "02",
      title: "Register and Prepare",
      description: "Get support for documentation, plantation setup, and the early steps needed to stay compliant from the start.",
    },
    {
      step: "03",
      title: "Grow with Guidance",
      description: "Follow practical advice for planting, maintenance, and future planning with SRSGA support.",
    },
  ],
  faqTitle: "Frequently asked questions",
  faqSubtitle: "Answer the most common questions a new farmer asks before joining or planting.",
  faqs: [
    {
      question: "Is Red Sandalwood suitable for my land?",
      answer: "SRSGA helps farmers understand land conditions, soil suitability, and plantation planning before they begin.",
    },
    {
      question: "Do I need legal approvals?",
      answer: "Yes, plantation registration and later harvest or transport steps require documentation and compliance support.",
    },
    {
      question: "Can beginners join SRSGA?",
      answer: "Yes. The association supports both first-time growers and experienced members with practical next steps.",
    },
  ],
  ctaTitle: "Ready to start your Red Sandalwood journey?",
  ctaSubtitle:
    "Join SRSGA to get practical support, trusted guidance, and a clearer path from plantation planning to long-term value.",
  ctaPrimary: { label: "Join Now", href: "/join-now" },
  ctaSecondary: { label: "Contact Us", href: "/contact" },
  seo: {
    metaTitle: "Sandalwood & Red Sanders Growers Association – AP",
    metaDescription: "Guidance, legal support, and community for Red Sandalwood farmers across Andhra Pradesh.",
  },
};

function withFallbackArray<T>(value: T[] | null | undefined, fallback: T[]) {
  return value && value.length > 0 ? value : fallback;
}

export async function getHomePageData(): Promise<HomePageData> {
  const data = await safeFetch(
    `*[_type == "homePage"][0]{
      heroEyebrow,
      heroTitle,
      heroSubtitle,
      heroImage,
      heroPrimaryCta,
      heroSecondaryCta,
      stats,
      missionEyebrow,
      missionTitle,
      missionStatement,
      keyPoints,
      featuredSectionTitle,
      featuredSectionSubtitle,
      featuredSections,
      journeyTitle,
      journeySubtitle,
      journeySteps,
      faqTitle,
      faqSubtitle,
      faqs,
      ctaTitle,
      ctaSubtitle,
      ctaPrimary,
      ctaSecondary,
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["homePage"] } }
  ) as Partial<HomePageData> | null;

  return {
    ...fallbackHomePageData,
    ...data,
    heroPrimaryCta: data?.heroPrimaryCta ?? fallbackHomePageData.heroPrimaryCta,
    heroSecondaryCta: data?.heroSecondaryCta ?? fallbackHomePageData.heroSecondaryCta,
    stats: withFallbackArray(data?.stats, fallbackHomePageData.stats),
    missionStatement: withFallbackArray(data?.missionStatement, fallbackHomePageData.missionStatement),
    keyPoints: withFallbackArray(data?.keyPoints, fallbackHomePageData.keyPoints),
    featuredSections: withFallbackArray(data?.featuredSections, fallbackHomePageData.featuredSections),
    journeySteps: withFallbackArray(data?.journeySteps, fallbackHomePageData.journeySteps),
    faqs: withFallbackArray(data?.faqs, fallbackHomePageData.faqs),
    ctaPrimary: data?.ctaPrimary ?? fallbackHomePageData.ctaPrimary,
    ctaSecondary: data?.ctaSecondary ?? fallbackHomePageData.ctaSecondary,
    seo: data?.seo ?? fallbackHomePageData.seo,
  };
}
