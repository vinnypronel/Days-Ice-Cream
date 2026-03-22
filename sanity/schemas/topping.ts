import { defineType, defineField } from "sanity";

export default defineType({
  name: "topping",
  title: "Topping",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "toppingCategory" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
      description: "Toggle off to hide this topping from the live menu",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "image",
    },
  },
});
