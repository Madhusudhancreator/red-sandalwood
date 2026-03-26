import { defineType, defineField } from "sanity";

export const legalStepsPage = defineType({
  name: "legalStepsPage",
  title: "Legal Steps Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Intro
    defineField({ name: "introTitle", title: "Intro Title", type: "string" }),
    defineField({ name: "introBody", title: "Intro Body", type: "text", rows: 3 }),
    // Steps timeline
    defineField({ name: "stepsTitle", title: "Steps Section Title", type: "string" }),
    defineField({
      name: "steps",
      title: "Legal Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Step Description", type: "text", rows: 3 }),
            defineField({ name: "documentNote", title: "Document/Note Chip (e.g. Form 15-A)", type: "string" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    // Promise card
    defineField({ name: "promiseTitle", title: "Promise Card Title", type: "string" }),
    defineField({
      name: "promiseItems",
      title: "Promise Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
