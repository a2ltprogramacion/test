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
    services_list: z.array(z.object({ item: z.string() })),
    date: z.date(),
    summary: z.string(),
    // body es proveído por defecto por Astro
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
  }),
});

export const collections = {
  'paginas': paginasCollection,
  'proyectos': proyectosCollection,
};
