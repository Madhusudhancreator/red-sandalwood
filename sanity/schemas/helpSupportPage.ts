import { defineType, defineField } from "sanity";

export const helpSupportPage = defineType({
  name: "helpSupportPage",
  title: "Help & Support Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    // Contact methods
    defineField({ name: "contactTitle", title: "Contact Section Title", type: "string" }),
    defineField({
      name: "contactMethods",
      title: "Contact Methods",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "type", title: "Type (phone/email/office/whatsapp)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "value", title: "Value (phone number / email / address)", type: "string" }),
            defineField({ name: "availability", title: "Availability Hours", type: "string" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    // Promise / commitment text
    defineField({ name: "promiseTitle", title: "Promise Title", type: "string" }),
    defineField({
      name: "promiseItems",
      title: "Promise Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "heroTitle" } },
});
