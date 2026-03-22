import { defineType, defineField } from "sanity";

export default defineType({
  name: "hours",
  title: "Store Hours",
  type: "document",
  fields: [
    defineField({
      name: "dayLabel",
      title: "Day Label",
      type: "string",
      description: "e.g., 'Monday – Friday' or 'Sunday'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openTime",
      title: "Opening Time",
      type: "string",
      description: "e.g., '12:00 PM'",
    }),
    defineField({
      name: "closeTime",
      title: "Closing Time",
      type: "string",
      description: "e.g., '9:00 PM'",
    }),
    defineField({
      name: "closed",
      title: "Closed All Day",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g., Mon=1, Tue=2, etc.)",
    }),
  ],
  preview: {
    select: {
      title: "dayLabel",
      open: "openTime",
      close: "closeTime",
      closed: "closed",
    },
    prepare({ title, open, close, closed }) {
      return {
        title,
        subtitle: closed ? "Closed" : `${open} - ${close}`,
      };
    },
  },
});
