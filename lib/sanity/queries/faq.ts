import { safeFetch } from "../client";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  label: string;
  faqs: FaqItem[];
}

export interface FaqPageData {
  heroTitle: string;
  heroSubtitle: string;
  categories: FaqCategory[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK_FAQ: FaqPageData = {
  heroTitle: "Frequently Asked Questions",
  heroSubtitle:
    "Everything you need to know about Red Sandalwood farming, SRSGA membership, legal compliance, and more.",
  categories: [
    {
      label: "About SRSGA",
      faqs: [
        {
          question: "What is SRSGA?",
          answer:
            "SRSGA — the Sandalwood and Red Sanders Growers Association — is an organisation formed to support and guide farmers in Andhra Pradesh who want to grow Sandalwood and Red Sandalwood legally, safely, and profitably.",
        },
        {
          question: "Where is SRSGA based?",
          answer:
            "SRSGA is based in Andhra Pradesh, India. We currently support farmers across 12+ districts in the state.",
        },
        {
          question: "Is SRSGA a government organisation?",
          answer:
            "No. SRSGA is a private farmers' association. However, we work closely with the State Forest Department and government agricultural bodies to ensure our members benefit from all applicable schemes and remain fully compliant.",
        },
        {
          question: "How many members does SRSGA have?",
          answer:
            "SRSGA currently has 500+ registered members across Andhra Pradesh, with new farmers joining every month.",
        },
      ],
    },
    {
      label: "Membership",
      faqs: [
        {
          question: "Who can join SRSGA?",
          answer:
            "Any farmer or landowner in Andhra Pradesh who is interested in growing Red Sandalwood or Sandalwood on their private land can apply to join SRSGA.",
        },
        {
          question: "How do I become a member?",
          answer:
            "You can apply through the Join Now page on our website or visit our office in person. Our team will review your application and get in touch within 2 working days.",
        },
        {
          question: "Is there a membership fee?",
          answer:
            "Please contact our team directly for details on membership fees and what is included. All core support benefits — farming guidance, legal assistance, and training access — are provided to registered members.",
        },
        {
          question: "Can I join if my land is not in Andhra Pradesh?",
          answer:
            "Currently, SRSGA focuses on supporting farmers within Andhra Pradesh, as Red Sandalwood is native to this region and its cultivation is governed by AP state laws.",
        },
      ],
    },
    {
      label: "Farming & Growing",
      faqs: [
        {
          question: "What type of soil is suitable for Red Sandalwood?",
          answer:
            "Red Sandalwood grows best in well-drained, rocky, or gravelly soils with a pH of 6.0–7.5. It is drought-tolerant and thrives in the dry deciduous forest conditions native to Andhra Pradesh.",
        },
        {
          question: "How long does it take for Red Sandalwood to mature?",
          answer:
            "Red Sandalwood typically takes 15–20 years to reach full maturity for commercial harvesting. Partial thinning of trees can begin around year 12.",
        },
        {
          question: "Can I intercrop with Red Sandalwood?",
          answer:
            "Yes. Short-term crops such as groundnut, pulses, and vegetables can be grown between Red Sandalwood trees during the first 4–5 years, providing additional income while the trees establish.",
        },
        {
          question: "Does SRSGA provide saplings?",
          answer:
            "SRSGA helps members source high-quality, certified saplings through approved nurseries. We also guide members on sapling quality checks and proper planting techniques.",
        },
      ],
    },
    {
      label: "Legal & Compliance",
      faqs: [
        {
          question: "Is it legal to grow Red Sandalwood on private land?",
          answer:
            "Yes. Under the AP Forest Produce Transit Rules and subsequent government orders, private farmers can grow Red Sandalwood legally on their own land after obtaining proper registration and approvals.",
        },
        {
          question: "What documents are needed to start cultivation?",
          answer:
            "You will need land ownership documents (patta), an application to the local Forest Department or APFDC, and a plantation registration certificate before beginning cultivation.",
        },
        {
          question: "Can I sell the timber once the trees mature?",
          answer:
            "Yes, with proper documentation. A Felling Permit from the AP Forest Department is required before harvesting. SRSGA helps members understand and navigate this process.",
        },
        {
          question: "Will SRSGA help if there is a legal issue?",
          answer:
            "SRSGA provides legal awareness and guidance support. We connect members with experienced legal advisors and help them understand their rights and obligations under AP forest and agricultural laws.",
        },
      ],
    },
  ],
};

export async function getFaqPageData(): Promise<FaqPageData> {
  const data = await safeFetch(
    `*[_type == "faqPage"][0]{
      heroTitle,
      heroSubtitle,
      categories[]{
        label,
        faqs[]{ question, answer }
      },
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["faqPage"] } }
  ) as Partial<FaqPageData> | null;

  if (!data) return FALLBACK_FAQ;

  return {
    heroTitle: data.heroTitle || FALLBACK_FAQ.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK_FAQ.heroSubtitle,
    categories:
      data.categories && data.categories.length > 0
        ? data.categories
        : FALLBACK_FAQ.categories,
    seo: data.seo,
  };
}
