import { defineType, defineField } from "sanity";

export const joinNowPage = defineType({
  name: "joinNowPage",
  title: "Join Now Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Form section
    defineField({ name: "formTitle", title: "Form Section Title", type: "string" }),
    defineField({ name: "formSubtitle", title: "Form Section Subtitle", type: "string" }),
    // Trust items displayed beneath the form
    defineField({
      name: "trustItems",
      title: "Trust Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
