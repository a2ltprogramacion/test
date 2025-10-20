// @src/content/config.ts
import { z, defineCollection } from 'astro:content';

// Schema para la colección de Páginas (ej. Home)
const paginasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    nosotros: z.object({
      title: z.string(),
      body: z.string(),
      image: z.string(),
    }),
  }),
});

// Schema para la colección de Proyectos
const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    title: z.string(),
    services_list: z.array(z.object({ item: z.string() })).optional(),
    image: z.string().optional(),
    date: z.date().optional(),
    summary: z.string().optional(),
    // body es proveído por defecto por Astro
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
  }),
});

// Schema para la colección de Ajustes
const ajustesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    proyectos_destacados: z.array(z.string()),
  }),
});

export const collections = {
  'pages': paginasCollection,
  'proyectos': proyectosCollection,
  'ajustes': ajustesCollection,
};
