import { defineType, defineField } from "sanity";

export const ourStoryPage = defineType({
  name: "ourStoryPage",
  title: "Our Story Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Where It All Began
    defineField({ name: "beginningTitle", title: "Beginning Section Title", type: "string" }),
    defineField({ name: "beginningBody", title: "Beginning Section Body", type: "text", rows: 4 }),
    // Stats strip
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
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
    // The Tree Behind Our Purpose
    defineField({ name: "treeTitle", title: "Tree Section Title", type: "string" }),
    defineField({ name: "treeBody", title: "Tree Section Body", type: "text", rows: 3 }),
    // Our Roots Run Deep
    defineField({ name: "rootsTitle", title: "Roots Section Title", type: "string" }),
    defineField({ name: "rootsBody", title: "Roots Section Body", type: "text", rows: 3 }),
    // What SRSGA Does — pillars
    defineField({ name: "pillarsTitle", title: "Pillars Section Title", type: "string" }),
    defineField({
      name: "pillars",
      title: "Pillars",
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
    // Our Vision
    defineField({ name: "visionTitle", title: "Vision Section Title", type: "string" }),
    defineField({ name: "visionBody", title: "Vision Section Body", type: "text", rows: 3 }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
