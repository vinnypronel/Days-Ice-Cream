import { defineType, defineField } from "sanity";

export default defineType({
  name: "flavor",
  title: "Flavor",
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
      to: [{ type: "flavorCategory" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
      description: "Toggle off to hide this flavor from the live menu",
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
