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

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    role: z.string().optional(),
    award: z.string().optional(),
    adoption: z.string().optional(),
    cover: z.string().optional(),
    playUrl: z.string().optional(),
    order: z.number(),
  }),
});

const speeches = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    video: z.string(),
    order: z.number(),
  }),
});

export const collections = { publications, projects, speeches };
