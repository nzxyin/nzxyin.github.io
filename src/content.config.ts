import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    abstract: z.string(),
    pdfUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    doiUrl: z.string().optional(),
  }),
});

export const collections = { blog, research };
