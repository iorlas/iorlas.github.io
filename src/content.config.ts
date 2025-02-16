import { defineCollection, z } from "astro:content";

const BaseContent = z.object({
  isDraft: z.boolean().default(false),
  image: z.string().optional(),
  title: z.string(),
  excerpt: z.string().min(5).max(160),
  publishDate: z
    .string()
    .optional()
    .or(z.date())
    .transform((str) => (str ? new Date(str) : undefined)),
  updatedDate: z
    .string()
    .optional()
    .or(z.date())
    .transform((str) => (str ? new Date(str) : undefined)),
});

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: BaseContent.extend({}),
  }),
  kb: defineCollection({
    type: "content",
    schema: BaseContent.extend({}),
  }),
  page: defineCollection({
    type: "content",
    schema: BaseContent.extend({}),
  }),
};
