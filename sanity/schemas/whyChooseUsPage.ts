import { defineType, defineField } from "sanity";

export const whyChooseUsPage = defineType({
  name: "whyChooseUsPage",
  title: "Why Choose Us Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Intro split section
    defineField({ name: "introTitle", title: "Intro Section Title", type: "string" }),
    defineField({ name: "introBody", title: "Intro Section Body", type: "text", rows: 3 }),
    // 6 Reasons
    defineField({ name: "reasonsTitle", title: "Reasons Section Title", type: "string" }),
    defineField({
      name: "reasons",
      title: "Reasons",
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
    // Quote banner
    defineField({ name: "quoteText", title: "Quote Banner Text", type: "text", rows: 2 }),
    // Comparison table
    defineField({ name: "comparisonTitle", title: "Comparison Table Title", type: "string" }),
    defineField({
      name: "comparisonRows",
      title: "Comparison Table Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "aspect", title: "Aspect", type: "string" }),
            defineField({ name: "withSrsga", title: "With SRSGA", type: "string" }),
            defineField({ name: "alone", title: "Going Alone", type: "string" }),
          ],
          preview: { select: { title: "aspect" } },
        },
      ],
    }),
    // How We Support You
    defineField({ name: "supportTitle", title: "Support Section Title", type: "string" }),
    defineField({
      name: "supportSteps",
      title: "Support Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Step Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
