import { defineField, defineType } from "sanity";

export const knowledgeCenterPage = defineType({
  name: "knowledgeCenterPage",
  title: "Knowledge Center Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const treeInformationPage = defineType({
  name: "treeInformationPage",
  title: "Tree Information Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const farmingTechniquesPage = defineType({
  name: "farmingTechniquesPage",
  title: "Farming Techniques Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const climateSoilPage = defineType({
  name: "climateSoilPage",
  title: "Climate & Soil Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({
      name: "soilTypes",
      title: "Soil Types",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Soil Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
