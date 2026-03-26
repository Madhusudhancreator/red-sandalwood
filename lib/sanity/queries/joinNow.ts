import { safeFetch } from "../client";

export interface JoinNowPageData {
  heroTitle: string;
  heroSubtitle: string;
  formTitle: string;
  formSubtitle: string;
  trustItems: string[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: JoinNowPageData = {
  heroTitle: "Join SRSGA Today",
  heroSubtitle:
    "Take the first step towards growing Red Sandalwood legally and profitably. Fill in the form below and our team will be in touch within 2 working days.",
  formTitle: "Membership Application",
  formSubtitle: "Tell us about yourself and your land. All fields are required.",
  trustItems: [
    "100% free to apply",
    "No obligation until you confirm",
    "Response within 2 working days",
    "Available in Telugu & English",
  ],
};

export async function getJoinNowPageData(): Promise<JoinNowPageData> {
  const data = await safeFetch(
    `*[_type == "joinNowPage"][0]{
      heroTitle, heroSubtitle,
      formTitle, formSubtitle,
      trustItems,
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["joinNowPage"] } }
  ) as Partial<JoinNowPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    formTitle: data.formTitle || FALLBACK.formTitle,
    formSubtitle: data.formSubtitle || FALLBACK.formSubtitle,
    trustItems:
      data.trustItems && data.trustItems.length > 0
        ? data.trustItems
        : FALLBACK.trustItems,
    seo: data.seo,
  };
}
