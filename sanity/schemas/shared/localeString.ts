import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Locale String",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "te", title: "Telugu", type: "string" }),
  ],
});
