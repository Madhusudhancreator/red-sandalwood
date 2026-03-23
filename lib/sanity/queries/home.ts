import type { PortableTextBlock } from "@portabletext/react";
import { safeFetch } from "../client";

export type HomePageLink = {
  label?: string;
  href?: string;
};

export type HomePageCard = {
  title: string;
  description: string;
};

export type HomePageComparisonCard = {
  title: string;
  description: string;
  badge: string;
  highlight: string;
  image?: unknown;
};

export type HomePageMilestone = {
  value: string;
  label: string;
  description: string;
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
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: HomePageLink;
  heroSecondaryCta: HomePageLink;
  trustBadges: string[];
  associationTitle: string;
  associationCards: HomePageCard[];
  treeValueTitle: string;
  treeValueCards: HomePageCard[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonCards: HomePageComparisonCard[];
  historyEyebrow: string;
  historyTitle: string;
  historyBody: PortableTextBlock[];
  historyMilestones: HomePageMilestone[];
  historyImage?: unknown;
  memberBenefitsTitle: string;
  memberBenefitsSubtitle: string;
  memberBenefits: HomePageCard[];
  supportTitle: string;
  supportSubtitle: string;
  supportItems: string[];
  legalTitle: string;
  legalSubtitle: string;
  legalItems: string[];
  journeyTitle: string;
  journeySubtitle: string;
  journeySteps: HomePageJourneyStep[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: HomePageFaq[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaTrustLine: string;
  ctaPrimary: HomePageLink;
  ctaSecondary: HomePageLink;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

const fallbackHomePageData: HomePageData = {
  heroLabel: "For farmers, landowners, and future growers",
  heroTitle: "Grow Sandalwood & Red Sandalwood with the Right Guidance",
  heroSubtitle:
    "SRSGA supports growers with guidance, member support, legal awareness, and practical help from planting to long-term growth.",
  heroPrimaryCta: { label: "Join SRSGA", href: "/join-now" },
  heroSecondaryCta: { label: "Explore Member Benefits", href: "/farmer-benefits" },
  trustBadges: ["Farmer Support", "Legal Guidance", "Member Network", "Long-Term Tree Value"],
  associationTitle: "Why Choose SRSGA",
  associationCards: [
    {
      title: "Trusted grower guidance",
      description: "Clear direction for growers who want practical, step-by-step support instead of confusing information.",
    },
    {
      title: "Support for members",
      description: "A member-first association model that helps people move from first questions to confident planning.",
    },
    {
      title: "Legal awareness",
      description: "Awareness of permissions, documentation, and compliance steps that matter to responsible growers.",
    },
    {
      title: "Practical plantation help",
      description: "Useful guidance for crop planning, early setup, maintenance, and long-term tree-growing decisions.",
    },
  ],
  treeValueTitle: "Why Grow Sandalwood & Red Sandalwood",
  treeValueCards: [
    {
      title: "High-value tree crops",
      description: "Both crops carry premium value narratives and require patient, informed cultivation decisions.",
    },
    {
      title: "Long-term family asset",
      description: "Tree-based cultivation can support long-range planning and future security when managed carefully.",
    },
    {
      title: "Regional relevance",
      description: "These crops hold special relevance for growers in South India, especially Andhra Pradesh and Telangana contexts.",
    },
    {
      title: "Strong future demand story",
      description: "The long-term demand narrative keeps these trees meaningful for serious growers and planners.",
    },
  ],
  comparisonTitle: "Sandalwood vs Red Sandalwood",
  comparisonSubtitle:
    "A simple comparison helps first-time visitors understand why both crops matter without forcing everything into one paragraph.",
  comparisonCards: [
    {
      title: "Sandalwood",
      description: "Aromatic, premium, and known for long-term value when cultivated with patience and proper guidance.",
      badge: "Premium crop",
      highlight: "Aromatic • premium • long-term value",
    },
    {
      title: "Red Sandalwood",
      description: "Rare, high-value, and strongly linked to region-specific cultivation awareness and legal understanding.",
      badge: "Region-linked crop",
      highlight: "Rare • high-value • region-linked cultivation",
    },
  ],
  historyEyebrow: "SRSGA history",
  historyTitle: "An association built around grower confidence, not sales pressure.",
  historyBody: [
    {
      _type: "block",
      _key: "history-1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "history-1-span",
          text: "SRSGA was shaped around the idea that growers need practical support, better awareness, and a trusted network when making long-term crop decisions around sandalwood and red sandalwood.",
          marks: [],
        },
      ],
    },
  ],
  historyMilestones: [
    {
      value: "01",
      label: "Grower-led start",
      description: "Built to serve real cultivation interests and farmer concerns.",
    },
    {
      value: "02",
      label: "Support-focused approach",
      description: "Designed around clarity, guidance, and practical next steps.",
    },
    {
      value: "03",
      label: "Long-term vision",
      description: "Helping members think beyond planting toward sustainable growth.",
    },
  ],
  memberBenefitsTitle: "Member Benefits",
  memberBenefitsSubtitle:
    "Visitors should quickly understand the value of becoming part of a serious grower association.",
  memberBenefits: [
    { title: "Guidance", description: "Clear support for growers at different stages of the journey." },
    { title: "Plantation support", description: "Practical help for planning and progressing with more confidence." },
    { title: "Member community", description: "Association-led connection with a wider network of growers." },
    { title: "Legal awareness", description: "Better understanding of permissions and documentation needs." },
    { title: "Updates & learning", description: "Useful learning and information for members over time." },
    { title: "Help with next steps", description: "A more guided path from first interest to informed action." },
  ],
  supportTitle: "Support",
  supportSubtitle: "Practical help for growers who need clarity, direction, and responsive assistance.",
  supportItems: [
    "Basic grower guidance",
    "Plantation planning support",
    "Member helpdesk direction",
    "Support for new growers",
  ],
  legalTitle: "Legal Advice",
  legalSubtitle: "Awareness-focused guidance around permissions, documentation, and compliance-related next steps.",
  legalItems: [
    "Documentation awareness",
    "Permissions guidance",
    "Compliance direction",
    "Support on the right next steps",
  ],
  journeyTitle: "How It Works / Journey to Grow",
  journeySubtitle: "A clear path helps growers feel supported from the beginning instead of overwhelmed.",
  journeySteps: [
    { step: "01", title: "Understand the crop", description: "Know the purpose, value, and relevance of sandalwood and red sandalwood." },
    { step: "02", title: "Prepare land", description: "Assess suitability, plan the space, and prepare for responsible planting." },
    { step: "03", title: "Get proper planting guidance", description: "Move forward with better clarity on the right plantation approach." },
    { step: "04", title: "Maintain and monitor", description: "Follow practical care, observation, and ongoing support as the trees grow." },
    { step: "05", title: "Grow with long-term planning", description: "Think ahead with member support, awareness, and future-focused guidance." },
  ],
  faqTitle: "Frequently asked questions",
  faqSubtitle: "FAQ helps reduce hesitation for farmers and first-time growers exploring this category.",
  faqs: [
    {
      question: "Is it legal to grow sandalwood or red sandalwood?",
      answer: "Legal requirements and permissions can vary by crop and context, so growers need proper awareness and guidance before acting.",
    },
    {
      question: "Who can join SRSGA?",
      answer: "SRSGA is designed for farmers, landowners, and future growers looking for trusted guidance and member support.",
    },
    {
      question: "Does SRSGA support new growers?",
      answer: "Yes. The association is positioned to help people who are just beginning and need simple, practical direction.",
    },
    {
      question: "What kind of land is suitable?",
      answer: "Suitability depends on crop, region, and practical planning, so land-related decisions should be made carefully with guidance.",
    },
    {
      question: "Why should I become a member?",
      answer: "Membership gives growers access to support, a network, better awareness, and a more guided journey forward.",
    },
  ],
  ctaTitle: "Build your future with better guidance, not confusion.",
  ctaSubtitle:
    "Join SRSGA to explore member support, legal awareness, and practical help for sandalwood and red sandalwood growers.",
  ctaTrustLine: "Trusted guidance for growers who want clarity, support, and a long-term view.",
  ctaPrimary: { label: "Join SRSGA", href: "/join-now" },
  ctaSecondary: { label: "Contact Us", href: "/contact" },
  seo: {
    metaTitle: "SRSGA – Sandalwood & Red Sandalwood Grower Guidance",
    metaDescription: "Trusted guidance, member support, legal awareness, and practical help for sandalwood and red sandalwood growers.",
  },
};

function withFallbackArray<T>(value: T[] | null | undefined, fallback: T[]) {
  return value && value.length > 0 ? value : fallback;
}

export async function getHomePageData(): Promise<HomePageData> {
  const data = await safeFetch(
    `*[_type == "homePage"][0]{
      heroLabel,
      heroTitle,
      heroSubtitle,
      heroPrimaryCta,
      heroSecondaryCta,
      trustBadges,
      associationTitle,
      associationCards,
      treeValueTitle,
      treeValueCards,
      comparisonTitle,
      comparisonSubtitle,
      comparisonCards,
      historyEyebrow,
      historyTitle,
      historyBody,
      historyMilestones,
      historyImage,
      memberBenefitsTitle,
      memberBenefitsSubtitle,
      memberBenefits,
      supportTitle,
      supportSubtitle,
      supportItems,
      legalTitle,
      legalSubtitle,
      legalItems,
      journeyTitle,
      journeySubtitle,
      journeySteps,
      faqTitle,
      faqSubtitle,
      faqs,
      ctaTitle,
      ctaSubtitle,
      ctaTrustLine,
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
    trustBadges: withFallbackArray(data?.trustBadges, fallbackHomePageData.trustBadges),
    associationCards: withFallbackArray(data?.associationCards, fallbackHomePageData.associationCards),
    treeValueCards: withFallbackArray(data?.treeValueCards, fallbackHomePageData.treeValueCards),
    comparisonCards: withFallbackArray(data?.comparisonCards, fallbackHomePageData.comparisonCards),
    historyBody: withFallbackArray(data?.historyBody, fallbackHomePageData.historyBody),
    historyMilestones: withFallbackArray(data?.historyMilestones, fallbackHomePageData.historyMilestones),
    memberBenefits: withFallbackArray(data?.memberBenefits, fallbackHomePageData.memberBenefits),
    supportItems: withFallbackArray(data?.supportItems, fallbackHomePageData.supportItems),
    legalItems: withFallbackArray(data?.legalItems, fallbackHomePageData.legalItems),
    journeySteps: withFallbackArray(data?.journeySteps, fallbackHomePageData.journeySteps),
    faqs: withFallbackArray(data?.faqs, fallbackHomePageData.faqs),
    ctaPrimary: data?.ctaPrimary ?? fallbackHomePageData.ctaPrimary,
    ctaSecondary: data?.ctaSecondary ?? fallbackHomePageData.ctaSecondary,
    seo: data?.seo ?? fallbackHomePageData.seo,
  };
}
