import { defineField, defineType } from "sanity";

export const farmerTrainingPage = defineType({
  name: "farmerTrainingPage",
  title: "Farmer Training Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const workshop = defineType({
  name: "workshop",
  title: "Workshops",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "date", title: "Date & Time", type: "datetime" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "blockContent" }),
    defineField({ name: "registrationLink", title: "Registration Link", type: "url" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
  orderings: [{ title: "Date (Newest First)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});

export const trainingVideo = defineType({
  name: "trainingVideo",
  title: "Training Videos",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "videoUrl", title: "Video URL", type: "url" }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  orderings: [{ title: "Newest First", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "thumbnail" } },
});

export const pdfGuide = defineType({
  name: "pdfGuide",
  title: "PDF Guides",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "file", title: "PDF File", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "fileSize", title: "File Size (e.g. 2.4 MB)", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  orderings: [{ title: "Newest First", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
