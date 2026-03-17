import { defineType, defineField } from "sanity";

export const helpSupportPage = defineType({
  name: "helpSupportPage",
  title: "Help & Support Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "intro", title: "Introduction", type: "localeText" }),
    defineField({ name: "body", title: "Body", type: "localeBlockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
