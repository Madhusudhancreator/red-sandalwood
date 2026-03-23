export type Lang = "en" | "te";

export const translations = {
  en: {
    nav: {
      home: "Home",
      ourStory: "SRSGA History",
      whyChooseUs: "Why Us",
      farmerBenefits: "Member Benefits",
      helpSupport: "Support",
      legalSteps: "Legal Advice",
      ourMembers: "FAQ",
      joinNow: "Join SRSGA",
    },
    footer: {
      tagline:
        "Supporting red sandalwood farmers across Andhra Pradesh with knowledge, legal guidance, and market access.",
      quickLinks: "Quick Links",
      resources: "Resources",
      contact: "Contact",
      getInTouch: "Get in Touch",
      copyright: "Sandalwood & Red Sanders Growers Association – Andhra Pradesh",
      quickLinkItems: [
        { label: "Our Story", href: "/our-story" },
        { label: "Why Choose Us", href: "/why-choose-us" },
        { label: "Farmer Benefits", href: "/farmer-benefits" },
        { label: "Legal Steps", href: "/legal-steps" },
      ],
      resourceItems: [
        { label: "Finance Help", href: "/finance-help" },
        { label: "Help & Support", href: "/help-support" },
        { label: "Our Members", href: "/our-members" },
        { label: "Join Now", href: "/join-now" },
      ],
    },
    lang: {
      en: "English",
      te: "తెలుగు",
    },
  },
  te: {
    nav: {
      home: "హోమ్",
      ourStory: "ఎస్‌ఆర్‌ఎస్‌జిఏ చరిత్ర",
      whyChooseUs: "మమ్మల్ని ఎందుకు",
      farmerBenefits: "సభ్యుల ప్రయోజనాలు",
      helpSupport: "సహాయం",
      legalSteps: "చట్ట సలహా",
      ourMembers: "తరచుగా అడిగే ప్రశ్నలు",
      joinNow: "ఇప్పుడే చేరండి",
    },
    footer: {
      tagline:
        "జ్ఞానం, న్యాయ మార్గదర్శకత్వం మరియు మార్కెట్ యాక్సెస్‌తో ఆంధ్రప్రదేశ్ అంతటా రెడ్ శాండల్‌వుడ్ రైతులకు సహాయపడటం.",
      quickLinks: "త్వరిత లింక్‌లు",
      resources: "వనరులు",
      contact: "సంప్రదింపు",
      getInTouch: "సంప్రదించండి",
      copyright: "చందనం & రెడ్ శాండర్స్ గ్రోవర్స్ అసోసియేషన్ – ఆంధ్రప్రదేశ్",
      quickLinkItems: [
        { label: "మన కథ", href: "/our-story" },
        { label: "మమ్మల్ని ఎందుకు", href: "/why-choose-us" },
        { label: "రైతు ప్రయోజనాలు", href: "/farmer-benefits" },
        { label: "చట్టపరమైన దశలు", href: "/legal-steps" },
      ],
      resourceItems: [
        { label: "ఆర్థిక సహాయం", href: "/finance-help" },
        { label: "సహాయం & మద్దతు", href: "/help-support" },
        { label: "మన సభ్యులు", href: "/our-members" },
        { label: "ఇప్పుడే చేరండి", href: "/join-now" },
      ],
    },
    lang: {
      en: "English",
      te: "తెలుగు",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Lang];
