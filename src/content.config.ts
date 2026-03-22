import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    countrySlug: z.string(),
    citySlug: z.string(),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { travel };
