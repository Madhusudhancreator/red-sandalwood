import { defineField, defineType } from "sanity";

const stepsField = defineField({
  name: "steps",
  title: "Steps",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        { name: "stepNumber", title: "Step Number", type: "number" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
      ],
    },
  ],
});

export const farmingGuidePage = defineType({
  name: "farmingGuidePage",
  title: "Farming Guide Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const nurseryPage = defineType({
  name: "nurseryPage",
  title: "Nursery Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    stepsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const plantationPage = defineType({
  name: "plantationPage",
  title: "Plantation Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    stepsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const maintenancePage = defineType({
  name: "maintenancePage",
  title: "Maintenance Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    stepsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const harvestingPage = defineType({
  name: "harvestingPage",
  title: "Harvesting Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    stepsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
