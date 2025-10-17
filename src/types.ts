export interface Cue {
  slug: string;
  title: string;
  description: string;
  price: number;
  heroImage: string;
  tagline?: string;   
  brandLogo?: string
  whatsappLink: string;
  galleryImages?: string[];
  category: 'shaft' | 'butt';
  facebookLink?: string; 
  specifications?: Record<string, string>;
  featured?: boolean;
  soldOut?: boolean;
}


export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
