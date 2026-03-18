import { defineType, defineField } from "sanity";

export const ourMembersPage = defineType({
  name: "ourMembersPage",
  title: "Our Members Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "intro", title: "Introduction", type: "localeText" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
