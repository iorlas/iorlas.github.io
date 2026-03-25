import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const travel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travel" }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    countrySlug: z.string(),
    citySlug: z.string(),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const trainings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/trainings" }),
  schema: z.object({
    title: z.string(),
    program: z.string(),
    programSlug: z.string(),
    docSlug: z.string(),
    type: z.enum(["program", "guide"]),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.split("/").pop()?.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().default(""),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { travel, trainings, blog };
