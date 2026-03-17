import { defineField, defineType } from "sanity";

export const marketTradePage = defineType({
  name: "marketTradePage",
  title: "Market & Trade Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const timberPricesPage = defineType({
  name: "timberPricesPage",
  title: "Timber Prices Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "lastUpdated", title: "Last Updated", type: "date" }),
    defineField({ name: "priceDisclaimer", title: "Price Disclaimer", type: "text" }),
    defineField({
      name: "priceTable",
      title: "Price Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "grade", title: "Grade / Quality", type: "string" },
            { name: "pricePerKg", title: "Price per Kg (₹)", type: "string" },
            { name: "notes", title: "Notes", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "body", title: "Additional Information", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const exportInformationPage = defineType({
  name: "exportInformationPage",
  title: "Export Information Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({
      name: "exportRequirements",
      title: "Export Requirements",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "requirement", title: "Requirement", type: "string" },
            { name: "details", title: "Details", type: "text" },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
