import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['tech', 'ai', 'business', 'crypto', 'startups']),
    tags: z.array(z.string()).default([]),
    author: z.string().default('The Brief'),
    lang: z.enum(['fr', 'en']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    youtubeVideoId: z.string().optional(),
  }),
});

export const collections = { articles };
