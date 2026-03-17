import { defineType, defineField } from "sanity";

export const joinNowPage = defineType({
  name: "joinNowPage",
  title: "Join Now Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "body", title: "Body", type: "localeBlockContent" }),
    defineField({ name: "membershipFees", title: "Membership Fees", type: "localeBlockContent" }),
    defineField({
      name: "applicationFormEmbed",
      title: "Application Form Embed URL",
      type: "url",
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title.en" } },
});
