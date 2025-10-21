// @src/content/config.ts
import { z, defineCollection } from 'astro:content';

const hexColor = (name = 'color') => z.string().optional().refine(val => {
  if (!val) return true;
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(val);
}, { message: `${name} must be a valid hex color, e.g. #ff0000` });

// Schema para la colección de Páginas (ej. Home)
const paginasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    canonical_url: z.string().optional(),
    robots: z.string().optional(),
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),

    hero: z.object({
      background_image: z.string().optional(),
      title: z.string().optional(),
      title_color: hexColor('hero.title_color'),
      subtitle: z.string().optional(),
      subtitle_color: hexColor('hero.subtitle_color'),
      cta_text: z.string().optional(),
      cta_url: z.string().optional(),
    }).optional(),

    nosotros: z.object({
      title: z.string().optional(),
      title_color: hexColor('nosotros.title_color'),
      content: z.string().optional(),
      content_color: hexColor('nosotros.content_color'),
      image: z.string().optional(),
    }).optional(),

    servicios: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      lista: z.array(z.object({
        title: z.string(),
        title_color: hexColor('servicios.lista.title_color'),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        text_color: hexColor('servicios.lista.text_color'),
        image: z.string().optional(),
      })).optional(),
    }).optional(),

    clientes: z.object({
      title: z.string().optional(),
      lista: z.array(z.object({
        quote: z.string(),
        author: z.string().optional(),
        google_review_embed: z.string().optional(),
        text_color: hexColor('clientes.lista.text_color'),
      })).optional(),
    }).optional(),
  }),
});

// Schema para la colección de Proyectos
const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    title: z.string().optional(),
    services_list: z.array(z.object({ item: z.string() })).optional(),
    image: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(),
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
  }),
});

// Schema para la colección de Ajustes
const ajustesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    proyectos_destacados: z.array(z.string()).optional(),
  }),
});

const contactoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    whatsapp: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    contact_heading: z.string().optional(),
    contact_subheading: z.string().optional(),
    whatsapp_message: z.string().optional(),
    show_contact_section: z.boolean().optional(),
  }),
});

export const collections = {
  'pages': paginasCollection,
  'proyectos': proyectosCollection,
  'ajustes': ajustesCollection,
  'informacion-de-contacto': contactoCollection,
};
