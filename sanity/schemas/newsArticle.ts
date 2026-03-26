import { defineType, defineField } from "sanity";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tag", title: "Tag (e.g. Conservation, Farming, Market)", type: "string" }),
    defineField({ name: "publishedDate", title: "Published Date", type: "date" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Thumbnail Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "url", title: "Article URL (external link)", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "tag", media: "image" } },
});
