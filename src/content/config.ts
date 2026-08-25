import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        me: z.boolean().optional(),
      }),
    ),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['accepted', 'preprint', 'under-review', 'in-preparation']),
    statusNote: z.string().optional(),
    equalContribution: z.boolean().optional(),
    order: z.number(),
    pdf: z.string().optional(),
    arxiv: z.string().optional(),
    code: z.string().optional(),
    doi: z.string().optional(),
    highlight: z.string().optional(),
  }),
});

export const collections = { publications };
