import { defineField, defineType } from "sanity";

export const memberPortalPage = defineType({
  name: "memberPortalPage",
  title: "Member Portal Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({
      name: "benefits",
      title: "Membership Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const joinAssociationPage = defineType({
  name: "joinAssociationPage",
  title: "Join Association Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "membershipFees", title: "Membership Fees", type: "blockContent" }),
    defineField({ name: "applicationFormEmbed", title: "Application Form URL", type: "url" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const farmerRegistrationPage = defineType({
  name: "farmerRegistrationPage",
  title: "Farmer Registration Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "eligibility", title: "Eligibility Criteria", type: "blockContent" }),
    defineField({ name: "registrationFormEmbed", title: "Registration Form URL", type: "url" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
