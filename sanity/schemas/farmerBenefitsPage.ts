import { defineType, defineField } from "sanity";

export const farmerBenefitsPage = defineType({
  name: "farmerBenefitsPage",
  title: "Farmer Benefits Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Intro
    defineField({ name: "introTitle", title: "Intro Title", type: "string" }),
    defineField({ name: "introBody", title: "Intro Body", type: "text", rows: 3 }),
    // Benefits grid
    defineField({ name: "benefitsTitle", title: "Benefits Section Title", type: "string" }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    // Stats banner
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value (e.g. 500+)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
