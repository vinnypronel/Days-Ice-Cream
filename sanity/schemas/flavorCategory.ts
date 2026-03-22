import { defineType, defineField } from "sanity";

export default defineType({
  name: "flavorCategory",
  title: "Flavor Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Use this to control the sorting order on the filter bar (lower numbers first).",
    }),
  ],
});
