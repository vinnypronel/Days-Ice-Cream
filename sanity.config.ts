"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Day's Ice Cream Studio",
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Global Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "siteSettings"
            ),
          ]),
    }),
  ],
});
