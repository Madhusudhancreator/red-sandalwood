import { defineType, defineField } from "sanity";

export const faqPage = defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "categories",
      title: "FAQ Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Category Label", type: "string" }),
            defineField({
              name: "faqs",
              title: "Questions",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "question", title: "Question", type: "string" }),
                    defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
                  ],
                  preview: { select: { title: "question" } },
                },
              ],
            }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
