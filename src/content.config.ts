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

const trainings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainings' }),
  schema: z.object({
    title: z.string(),
    program: z.string(),
    programSlug: z.string(),
    docSlug: z.string(),
    type: z.enum(['program', 'guide']),
    order: z.number(),
  }),
});

export const collections = { travel, trainings };
