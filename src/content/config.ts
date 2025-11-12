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

const promotionsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    tagline: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    feature1_title: z.string().optional(),
    feature1_description: z.string().optional(),
    feature2_title: z.string().optional(),
    feature2_description: z.string().optional(),
    button1_text: z.string().optional(),
    button1_link: z.string().optional(),
    button2_text: z.string().optional(),
    button2_link: z.string().optional(),
  }),
});

export const collections = {
  'cues': cuesCollection,
  'promotions': promotionsCollection,
};
