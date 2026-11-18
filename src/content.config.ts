// Content collections for the EION Books site.
// Each book is one Markdown file in src/content/books/, edited through the dashboard at /admin.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    illustrator: z.string().optional(),
    category: z.enum(['Picture book', 'For parents']),
    series: z.string().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    description: z.string(),
    buyLabel: z.string().default('Buy the book'),
    buyUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

export const collections = { books };
