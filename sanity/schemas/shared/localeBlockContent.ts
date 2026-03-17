import { defineType, defineField } from "sanity";

export const localeBlockContent = defineType({
  name: "localeBlockContent",
  title: "Locale Block Content",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "blockContent" }),
    defineField({ name: "te", title: "Telugu", type: "blockContent" }),
  ],
});
