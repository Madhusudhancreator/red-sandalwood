import { defineType, defineField } from "sanity";

export const legalStepsPage = defineType({
  name: "legalStepsPage",
  title: "Legal Steps Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "intro", title: "Introduction", type: "localeText" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "localeString" }),
            defineField({ name: "description", title: "Step Description", type: "localeText" }),
          ],
          preview: { select: { title: "title.en" } },
        },
      ],
    }),
    defineField({ name: "body", title: "Body", type: "localeBlockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
