import { defineField, defineType } from "sanity";

const requiredDocsField = defineField({
  name: "requiredDocuments",
  title: "Required Documents",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        { name: "docName", title: "Document Name", type: "string" },
        { name: "description", title: "Description", type: "text" },
      ],
    },
  ],
});

export const legalGuidelinesPage = defineType({
  name: "legalGuidelinesPage",
  title: "Legal Guidelines Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "blockContent" }),
    defineField({ name: "importantNotice", title: "Important Notice", type: "text" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const forestDeptRulesPage = defineType({
  name: "forestDeptRulesPage",
  title: "Forest Department Rules Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "lastUpdated", title: "Last Updated", type: "date" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const treeRegistrationPage = defineType({
  name: "treeRegistrationPage",
  title: "Tree Registration Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    requiredDocsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});

export const transportPermitsPage = defineType({
  name: "transportPermitsPage",
  title: "Transport Permits Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    requiredDocsField,
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: { select: { title: "title" } },
});
