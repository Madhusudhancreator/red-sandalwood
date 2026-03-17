import { defineType, defineField } from "sanity";

export const farmerBenefitsPage = defineType({
  name: "farmerBenefitsPage",
  title: "Farmer Benefits Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "intro", title: "Introduction", type: "localeText" }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({ name: "body", title: "Body", type: "localeBlockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
