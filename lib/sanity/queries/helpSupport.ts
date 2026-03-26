import { safeFetch } from "../client";

export interface ContactMethod {
  type: string;
  title: string;
  description: string;
  value: string;
  availability: string;
}

export interface HelpSupportPageData {
  heroTitle: string;
  heroSubtitle: string;
  contactTitle: string;
  contactMethods: ContactMethod[];
  promiseTitle: string;
  promiseItems: string[];
  seo?: { metaTitle?: string; metaDescription?: string };
}

const FALLBACK: HelpSupportPageData = {
  heroTitle: "Help & Support",
  heroSubtitle:
    "We're here for every question, every concern, and every step of your Red Sandalwood journey. Reach us the way that works best for you.",
  contactTitle: "How to Reach Us",
  contactMethods: [
    {
      type: "phone",
      title: "Call Us",
      description:
        "Speak directly with our farming support team. Available Monday to Saturday during office hours.",
      value: "+91 98765 43210",
      availability: "Mon – Sat, 9 AM – 6 PM",
    },
    {
      type: "whatsapp",
      title: "WhatsApp",
      description:
        "Send us a message anytime. Our support team responds within a few hours on working days.",
      value: "+91 98765 43210",
      availability: "Mon – Sat, 9 AM – 8 PM",
    },
    {
      type: "email",
      title: "Email Us",
      description:
        "For detailed queries, documents, or formal communications, email is the best option.",
      value: "support@srsga.in",
      availability: "Response within 24 hours",
    },
    {
      type: "office",
      title: "Visit Our Office",
      description:
        "Come in person to meet our team, submit documents, or attend a consultation session.",
      value: "Tirupati, Andhra Pradesh",
      availability: "Mon – Sat, 10 AM – 5 PM",
    },
  ],
  promiseTitle: "Our Commitment to You",
  promiseItems: [
    "Every query is treated with full attention and care",
    "We respond to calls and messages on the same working day",
    "Our team never gives generic advice — we listen to your situation",
    "All support is available in Telugu and English",
    "We respect your privacy and handle all data securely",
  ],
};

export async function getHelpSupportPageData(): Promise<HelpSupportPageData> {
  const data = await safeFetch(
    `*[_type == "helpSupportPage"][0]{
      heroTitle, heroSubtitle,
      contactTitle,
      contactMethods[]{ type, title, description, value, availability },
      promiseTitle,
      promiseItems,
      seo
    }`,
    {},
    { next: { revalidate: 3600, tags: ["helpSupportPage"] } }
  ) as Partial<HelpSupportPageData> | null;

  if (!data) return FALLBACK;

  return {
    heroTitle: data.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: data.heroSubtitle || FALLBACK.heroSubtitle,
    contactTitle: data.contactTitle || FALLBACK.contactTitle,
    contactMethods:
      data.contactMethods && data.contactMethods.length > 0
        ? data.contactMethods
        : FALLBACK.contactMethods,
    promiseTitle: data.promiseTitle || FALLBACK.promiseTitle,
    promiseItems:
      data.promiseItems && data.promiseItems.length > 0
        ? data.promiseItems
        : FALLBACK.promiseItems,
    seo: data.seo,
  };
}
