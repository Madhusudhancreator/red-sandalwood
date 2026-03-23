import { defineField, defineType } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "subject", title: "Subject", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", validation: (r) => r.required() }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime" }),
  ],
  preview: {
    select: { title: "name", subtitle: "submittedAt" },
  },
  orderings: [
    { title: "Newest First", name: "submittedAtDesc", by: [{ field: "submittedAt", direction: "desc" }] },
  ],
});
