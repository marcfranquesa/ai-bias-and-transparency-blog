import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      title: z.string(),
      featured: z.boolean().optional(),
      description: z.string(),
      main: z.boolean().optional(),
    }),
});

export const collections = { blog };
