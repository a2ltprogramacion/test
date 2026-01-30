// @src/content/config.ts
import { defineCollection, z } from 'astro:content';

// -----------------------------------------------------------------
// ESQUEMA BASE PARA CONTENIDO DETALLADO (Servicios y Knowledge)
// -----------------------------------------------------------------
// Se mantiene el tipado explícito para evitar error ts(7031)
const detailedContentSchema = ({ image }: { image: any }) => z.object({

  // 1. Identidad de Card & Hero (Inmutabilidad de Diseño)
  // -------------------------------------------------------------
  title: z.string({
    required_error: "El título es obligatorio para la generación de la página.",
  }),
  main_image: image().describe("Imagen principal para la Card y fondo del Hero en la página de detalle."),
  main_image_alt: z.string().min(5, {
    message: "🚫 A11Y Error: El texto alternativo (Alt) es obligatorio y debe ser descriptivo.",
  }),
  
  // 2. Resumen (Card y Sección Introductoria)
  // -------------------------------------------------------------
  description: z.string().max(250, {
    message: "⚠️ SEO/Diseño: El resumen es muy largo para la card (Máx 250 car).",
  }).describe("Este texto se usará en la Card principal y como párrafo de resumen en la página de detalle."),

  // 3. Estructura de Diseño en "Z" (Evolución Nivel 2: Authority)
  // -------------------------------------------------------------
  content_blocks: z.object({
    // Bloque 1: Texto + Video o Imagen Centrado
    p1_title: z.string().optional(),
    p1_content: z.string().optional(),
    p1_media_type: z.enum(["image", "video"]).default("image"), // Nuevo selector
    p1_image: image().optional(),
    p1_image_alt: z.string().optional(),
    p1_video_url: z.string().url().optional(), // Link de YouTube

    // Bloque 2:  Imagen Izquierda - Texto Derecha
    p2_text: z.string().optional(),
    p2_image: image().optional(),
    p2_image_alt: z.string().optional(),

    // Bloque 3: Texto Izquierda - Imagen Derecha (Cierre)
    p3_text: z.string().optional(),
    p3_image: image().optional(),
    p3_image_alt: z.string().optional(),

    // Conclusión / Call to Action Final
    conclusion: z.string().optional().describe("Párrafo final de cierre o llamado a la acción."),
  }).optional(),

  // 4. Metadatos de Negocio
  // -------------------------------------------------------------
  order: z.number().default(0).describe("Prioridad de visualización (1 aparece primero)."),
  price: z.string().optional().describe("Ej: 'Desde $500' o 'Consultar'."),
  category: z.string().optional().describe("Etiqueta para filtrar (Ej: 'Infraestructura', 'Software')."),
});

// -----------------------------------------------------------------
// COLECCIÓN DE PÁGINAS (HOME + PÁGINAS GENÉRICAS)
// -----------------------------------------------------------------
const pagesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({

    // [NUEVO] CAMPOS GLOBALES (Permiten que existan Services/Knowledge)
    // -------------------------------------------------------------
    title: z.string().optional().describe("Título H1 de la página (Para páginas genéricas)."),
    subtitle: z.string().optional().describe("Subtítulo de la página (Para páginas genéricas)."),
    hero_bg: image().optional().describe("Fondo del Hero (Para páginas genéricas)."),

    // [MODIFICADO] SECCIONES DEL HOME (Ahora son OPCIONALES)
    // -------------------------------------------------------------
    
    // 0. Control de Módulos (Feature Flags)
    modules: z.object({
      show_hero: z.boolean().default(true),
      show_services: z.boolean().default(true),
      show_knowledge: z.boolean().default(true),
      show_clients: z.boolean().default(false),
      show_testimonials: z.boolean().default(false),
      show_about: z.boolean().default(true),
      show_faq: z.boolean().default(true),
    }).optional(), // <-- AHORA OPCIONAL
    
    // 1. Configuración SEO Avanzada
    seo: z.object({
      site_name: z.string().optional(),
      meta_title: z.string().max(65, { message: "El Meta Title no debe superar los 65 caracteres." }).optional(),
      meta_description: z.string().max(160, { message: "La Meta Description debe ser concisa (máx 160)." }).optional(),
      social_image: image().optional(),
      social_image_alt: z.string().optional(),
      favicon: image().optional(), 
    }).optional(), // <-- AHORA OPCIONAL

    // 2. Hero Section (Home)
    hero: z.object({
      bg_variant: z.enum(['image', 'color']).default('image'),
      bg_color: z.string().optional(),
      image: image().optional(),
      image_alt: z.string().optional(),
      title: z.string(),
      subtitle: z.string().optional(),
      cta_text: z.string().default("Más Información"),
      cta_link: z.string(),
    }).optional(), // <-- AHORA OPCIONAL

    // 3. Clientes (Social Proof)
    clients: z.array(z.object({
      logo: image().optional(),
      logo_alt: z.string().optional(),
      name: z.string(),
    })).optional(),

    // 4. Servicios (Home Section)
    services_section: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      highlighted_list: z.array(z.string()).optional(),
    }).optional(),

    // 5. Knowledge (Home Section)
    knowledge_section: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      highlighted_list: z.array(z.string()).optional(),
    }).optional(),

    // 4. About (Autoridad)
    about: z.object({
      title: z.string(),
      image: image().optional(),
      image_alt: z.string().optional(),
      business_bio: z.string(),
      stat_1: z.string().optional(),
      stat_2: z.string().optional(),
    }).optional(), // <-- AHORA OPCIONAL

    // 5. FAQ (Manejo de Objeciones)
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),

    // 6. Contacto (Footer Data)
    contact: z.object({
      heading: z.string().optional(),
      subheading: z.string().optional(),
      email: z.string().email({
        message: "El formato del correo electrónico no es válido.",
      }),
      phone: z.string(),
      address: z.string().optional(),
      social: z.object({
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        youtube: z.string().optional(),
        tiktok: z.string().optional(),
      }).optional(),
      footer_logo: image().optional(),
      footer_logo_alt: z.string().optional().describe("Descripción del logo del pie de página."),
      copyright: z.string(),
    }).optional(), // <-- AHORA OPCIONAL
  }),
});

// -----------------------------------------------------------------
// COLECCIÓN DE TESTIMONIOS (El testimonio es la autoridad)
// -----------------------------------------------------------------
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    author: z.string(),
    role: z.string().optional(),
    content: z.string().max(600, { message: "El testimonio es muy largo (máx 600 car)." }),
    order: z.number().default(0),
  }),
});

// Exportación Pública
export const collections = {
  'pages': pagesCollection,
  'services': defineCollection({ type: 'content', schema: detailedContentSchema }),
  'knowledge': defineCollection({ type: 'content', schema: detailedContentSchema }),
  'testimonials': testimonialsCollection, 
};