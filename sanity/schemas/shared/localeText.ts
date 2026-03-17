import { defineType, defineField } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Locale Text",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "text" }),
    defineField({ name: "te", title: "Telugu", type: "text" }),
  ],
});
