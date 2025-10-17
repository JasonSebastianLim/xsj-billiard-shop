
import type { Cue } from '../types';

export const allCues: Cue[] = [
  {
    slug: 'classic-pro-maple-cue',
    title: 'Classic Pro Maple Cue',
    description: 'A professional-grade cue made from 100% North American maple wood...',
    price: 1500000,
    heroImage: '/images/Predator-Panthera.jpg',
    galleryImages: [ 
      '/images/Predator-Panthera.jpg',
      '/images/Predator-Panthera-2.jpeg', 
      '/images/panthera-detail-3.jpeg',
    ],
    specifications: { 
      "Brand": "Predator",
      "Cue Type": "Playing Cue",
      "Joint Type": "Uni-Loc",
      "Wrap Type": "Irish Linen",
      "Butt Material": "Maple",
      "Weight": "19 oz"
    },
    brandLogo: '/images/predator-cues-seeklogo.png',
    category: 'butt',
    whatsappLink: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
    facebookLink: 'https://facebook.com/marketplace/item/YOUR_ITEM_ID',
  },
  {
    slug: 'stealth-carbon-fiber-cue',
    title: 'Stealth Carbon Fiber Cue',
    description: 'Ultra-lightweight carbon fiber construction for maximum precision...',
    price: 3250000,
    heroImage: '/images/Predator-Icon4_5.jpeg',
    brandLogo: '/images/predator-cues-seeklogo.png',
    category: 'shaft',
    whatsappLink: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
    facebookLink: 'https://facebook.com/marketplace/item/YOUR_ITEM_ID'
  },
  {
    slug: 'elegant-rosewood-cue',
    title: 'Elegant Rosewood Cue',
    description: 'Beautifully crafted with rosewood inlays...',
    price: 2100000,
    heroImage: '/images/Predator-Icon4_5.jpeg',
    brandLogo: '/images/predator-cues-seeklogo.png',
    category: 'butt', 
    whatsappLink: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
    facebookLink: 'https://facebook.com/marketplace/item/YOUR_ITEM_ID'
  },
  {
    slug: 'beginner-ashwood-cue',
    title: 'Beginner Ashwood Cue',
    description: 'A durable and reliable cue, perfect for beginners...',
    price: 850000,
    heroImage: 'https://placehold.co/800x600/ca8a04/ffffff?text=Ashwood+Cue',
    brandLogo: '/images/predator-cues-seeklogo.png',
    category: 'shaft', 
    whatsappLink: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
    facebookLink: 'https://facebook.com/marketplace/item/YOUR_ITEM_ID'
  }
];
