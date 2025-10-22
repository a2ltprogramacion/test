// @src/content/config.ts (VERSIÓN FINAL Y CORREGIDA)
import { z, defineCollection } from 'astro:content';

const serviciosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

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
      subtitle: z.string().optional(),
      cta_text: z.string().optional(),
      cta_url: z.string().optional(),
    }).optional(),
    nosotros: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    servicios: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
    }).optional(),
    clientes: z.object({
      title: z.string().optional(),
      lista: z.array(z.object({
        quote: z.string(),
        author: z.string().optional(),
        google_review_embed: z.string().optional(),
      })).optional(),
    }).optional(),
  }),
});

// Schema para la colección de Proyectos
const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    titulo: z.string().optional(),
    services_list: z.array(z.string()).optional(),
    image: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(),
    project_details: z.string().optional(),    
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
  }),
});

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
  'servicios': serviciosCollection,
  'pages': paginasCollection,
  'proyectos': proyectosCollection,
  'ajustes': ajustesCollection,
  'informacion-de-contacto': contactoCollection,
};