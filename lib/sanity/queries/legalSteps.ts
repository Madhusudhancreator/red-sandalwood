import { safeFetch } from "../client";

export interface LegalStep {
  title: string;
  description: string;
  documentNote: string;
}

export interface LegalStepsPageData {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introBody: string;
  stepsTitle: string;
  steps: LegalStep[];
  promiseTitle: string;
  promiseItems: string[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: LegalStepsPageData = {
  heroTitle: "Legal Steps for Red Sandalwood Cultivation",
  heroSubtitle:
    "Cultivating Red Sandalwood legally in Andhra Pradesh requires specific approvals and documentation. SRSGA guides you through every step.",
  introTitle: "Why Legal Compliance Matters",
  introBody:
    "Red Sandalwood is a protected species in India, and its cultivation is tightly regulated by the Andhra Pradesh state government. Skipping any legal step can result in fines, land seizure, or criminal charges. SRSGA ensures that every member is fully compliant before a single sapling is planted.",
  stepsTitle: "The 7 Legal Steps to Cultivate Legally",
  steps: [
    {
      title: "Verify Land Ownership & Classification",
      description:
        "Confirm that your land is privately owned (patta land) and classified as agricultural or wasteland. Forest land or government land is not eligible for private Red Sandalwood cultivation.",
      documentNote: "Patta / Land Records",
    },
    {
      title: "Apply for Plantation Registration",
      description:
        "Submit a formal application to your local Forest Division office or the AP Forest Development Corporation (APFDC) to register your intended Red Sandalwood plantation.",
      documentNote: "Plantation Registration Form",
    },
    {
      title: "Obtain State Forest Department Approval",
      description:
        "The Forest Department will inspect your land, verify your documents, and issue a formal approval for cultivation. This typically takes 15–30 working days.",
      documentNote: "DFO Approval Letter",
    },
    {
      title: "Procure Certified Saplings",
      description:
        "Purchase saplings only from government-approved nurseries or SRSGA-verified suppliers. Maintain a purchase receipt showing origin certification — this is required for future compliance checks.",
      documentNote: "Sapling Purchase Receipt",
    },
    {
      title: "Maintain Plantation Records",
      description:
        "Keep a plantation register showing tree count, planting dates, growth stages, and any treatments applied. SRSGA provides a standard register template for all members.",
      documentNote: "Plantation Register",
    },
    {
      title: "Renew Annual Compliance Report",
      description:
        "Submit an annual plantation status report to the local Forest Range Officer. This keeps your registration active and signals your compliance with ongoing monitoring requirements.",
      documentNote: "Annual Compliance Form",
    },
    {
      title: "Apply for Felling Permit Before Harvest",
      description:
        "When trees are ready for harvest (typically after 15–20 years), apply for a Felling Permit from the District Forest Officer. Harvesting without a permit is a criminal offence under AP forest law.",
      documentNote: "Form 15-A (Felling Permit)",
    },
  ],
  promiseTitle: "SRSGA's Legal Promise",
  promiseItems: [
    "We guide you through every document and form",
    "Our team reviews your applications before submission",
    "We alert you to compliance renewals before they lapse",
    "We connect you with legal experts if issues arise",
    "Every SRSGA member cultivates with full legal clarity",
  ],
};

export async function getLegalStepsPageData(): Promise<LegalStepsPageData> {
  const data = await safeFetch(
    `*[_type == "legalStepsPage"][0]{
      heroTitle, heroSubtitle,
      introTitle, introBody,
      stepsTitle,
      steps[]{ title, description, documentNote },
      promiseTitle,
      promiseItems,
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["legalStepsPage"] } }
  ) as Partial<LegalStepsPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    introTitle: data.introTitle || FALLBACK.introTitle,
    introBody: data.introBody || FALLBACK.introBody,
    stepsTitle: data.stepsTitle || FALLBACK.stepsTitle,
    steps: data.steps && data.steps.length > 0 ? data.steps : FALLBACK.steps,
    promiseTitle: data.promiseTitle || FALLBACK.promiseTitle,
    promiseItems:
      data.promiseItems && data.promiseItems.length > 0
        ? data.promiseItems
        : FALLBACK.promiseItems,
    seo: data.seo,
  };
}
