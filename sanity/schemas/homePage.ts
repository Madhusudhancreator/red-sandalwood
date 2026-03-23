import { defineField, defineType } from "sanity";

const ctaFields = [
  defineField({ name: "label", title: "Label", type: "string" }),
  defineField({ name: "href", title: "Link", type: "string" }),
] as const;

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
    }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "heroPrimaryCta",
      title: "Hero Primary CTA",
      type: "object",
      fields: [...ctaFields],
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Hero Secondary CTA",
      type: "object",
      fields: [...ctaFields],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
    defineField({
      name: "missionEyebrow",
      title: "Mission Eyebrow",
      type: "string",
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    }),
    defineField({
      name: "missionStatement",
      title: "Mission Statement",
      type: "blockContent",
    }),
    defineField({
      name: "keyPoints",
      title: "Key Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featuredSectionTitle",
      title: "Featured Section Title",
      type: "string",
    }),
    defineField({
      name: "featuredSectionSubtitle",
      title: "Featured Section Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "featuredSections",
      title: "Featured Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "link", title: "Link", type: "string" }),
            defineField({ name: "linkLabel", title: "Link Label", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "link" } },
        },
      ],
    }),
    defineField({
      name: "journeyTitle",
      title: "Journey Section Title",
      type: "string",
    }),
    defineField({
      name: "journeySubtitle",
      title: "Journey Section Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "journeySteps",
      title: "Journey Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "step", title: "Step Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "title", subtitle: "step", media: "image" } },
        },
      ],
    }),
    defineField({
      name: "faqTitle",
      title: "FAQ Title",
      type: "string",
    }),
    defineField({
      name: "faqSubtitle",
      title: "FAQ Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
    defineField({
      name: "ctaTitle",
      title: "Bottom CTA Title",
      type: "string",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "Bottom CTA Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaPrimary",
      title: "Bottom CTA Primary Button",
      type: "object",
      fields: [...ctaFields],
    }),
    defineField({
      name: "ctaSecondary",
      title: "Bottom CTA Secondary Button",
      type: "object",
      fields: [...ctaFields],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  initialValue: {
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
  },
  preview: { select: { title: "heroTitle" } },
});
