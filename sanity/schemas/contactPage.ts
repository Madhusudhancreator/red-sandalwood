import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text" }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({
      name: "phone",
      title: "Phone Numbers",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "email",
      title: "Email Addresses",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "officeHours", title: "Office Hours", type: "string" }),
    defineField({ name: "mapEmbed", title: "Google Maps Embed URL", type: "url" }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
