import { defineCollection, z } from 'astro:content';

const cuesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    price: z.number(),
    heroImage: z.string(),
    whatsappLink: z.string(),
    facebookLink: z.string().optional(),
    category: z.enum(['butt', 'shaft']),
    featured: z.boolean().optional(),
    tagline: z.string().optional(),
    brandLogo: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    specifications: z.record(z.string()).optional(),
    soldOut: z.boolean().optional(),
  }),
});

export const collections = {
  'cues': cuesCollection,
};
