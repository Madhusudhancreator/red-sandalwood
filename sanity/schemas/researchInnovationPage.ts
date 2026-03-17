import { defineField, defineType } from "sanity";

export const researchInnovationPage = defineType({
  name: "researchInnovationPage",
  title: "Research & Innovation Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const agroforestryPage = defineType({
  name: "agroforestryPage",
  title: "Agroforestry Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({
      name: "researchProjects",
      title: "Research Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Project Title", type: "string" },
            { name: "summary", title: "Summary", type: "text" },
            { name: "year", title: "Year", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const seedVarietiesPage = defineType({
  name: "seedVarietiesPage",
  title: "Seed Varieties Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({
      name: "varieties",
      title: "Seed Varieties",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Variety Name", type: "string" },
            { name: "characteristics", title: "Characteristics", type: "text" },
            { name: "yieldInfo", title: "Yield Information", type: "text" },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
