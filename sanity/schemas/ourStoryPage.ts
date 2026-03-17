import { defineType, defineField } from "sanity";

export const ourStoryPage = defineType({
  name: "ourStoryPage",
  title: "Our Story Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "body", title: "Body", type: "localeBlockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
