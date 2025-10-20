# Resumen del Proyecto: Elevawod.cl
# Versión 2.0

## 1. Visión y Objetivos del Proyecto

**Visión:** Posicionar a Elevawod.cl como un "socio tecnológico" cercano e innovador, no como un simple proveedor. El sitio web debe ser la principal herramienta de captación de clientes, proyectando una imagen de alta profesionalidad, confianza y modernidad.

**Público Objetivo:** Negocios B2B que buscan soluciones de software a medida y valoran un enfoque resolutivo y colaborativo.

**Objetivo Principal (CTA):** La acción número uno que un visitante debe realizar es el **contacto directo e inmediato** a través de WhatsApp o correo electrónico, idealmente con un solo clic.

**Tono de Marca:** La comunicación debe ser **cercana e innovadora**.

---

## 2. Requisitos Clave del Cliente (Cuestionario)

- **Dominio y Hosting:**
  - Dominio: `Elevawod.cl`.
  - Hosting actual: Página de aterrizaje en Canva. Existe un hosting con correo, pero hay apertura a nuevas opciones para mejorar rendimiento.

- **Estructura de la Landing Page (en orden de prioridad):**
  1. Inicio (Hero Section)
  2. Proyectos
  3. Clientes / Testimonios
  4. Servicios
  5. Sobre Nosotros
  6. Contacto

- **Información por Proyecto:**
  - Cliente
  - Título o subtítulos de los servicios realizados
  - Descripción
  - Fotos (Galería)

- **Control del Contenido (CMS):**
  - Es de suma importancia tener control total sobre textos e imágenes de toda la web.
  - Actualizar y gestionar proyectos fácilmente.
  - Control sobre el SEO.

---

## 3. Dirección de Diseño Estratégico

### 3.1. Sitios de Referencia

- **Primaria:** `agencialean.cl`
- **Secundarias:** `brandcrops.com`, `amarillolab.com`

### 3.2. Análisis Consolidado y Recomendaciones

El objetivo es lograr un equilibrio entre la **confianza y profesionalismo** de `agencialean.cl` y la **modernidad y sofisticación** de `brandcrops.com`.

- **Estructura y Layout (Base: agencialean.cl):**
  - Adoptar un layout claro, basado en un grid de 12 columnas, con abundante espacio en blanco para crear una jerarquía visual sólida y profesional.

- **Paleta de Colores (Base: agencialean.cl):**
  - Utilizar una paleta de alto contraste que inspire confianza: azul oscuro corporativo como primario (`~#0A253F`) y un color de acento vibrante (ej. naranja, `~#FF6F3C`) para los CTAs.

- **Tipografía (Fusión estratégica):**
  - **Títulos (H1, H2):** Usar una tipografía **Serif moderna** (estilo `brandcrops.com`, similar a Playfair Display) para añadir un toque editorial, de calidad y sofisticación.
  - **Párrafos:** Usar una tipografía **Sans-serif neutra y muy legible** (estilo `agencialean.cl`, similar a Open Sans, 16-18px) para garantizar la claridad.

- **Componentes y Micro-interacciones (Inspiración: amarillolab.com):**
  - **Botones:** Grandes, rectangulares, con esquinas ligeramente redondeadas y colores de alto contraste.
  - **Interacciones:** Implementar feedback dinámico pero sutil en los estados `hover`. Por ejemplo, un botón de color sólido que al pasar el cursor se invierte a un estilo con borde y fondo blanco.

### 3.3. Conclusión de Diseño

La web de Elevawod.cl debe sentirse **sólidamente profesional y confiable**, pero a la vez **completamente actual y moderna**, combinando una estructura predecible con detalles de diseño sofisticados e interacciones satisfactorias.

---

## 4. Arquitectura y Funcionalidades Implementadas (Estado Actual)

- **Framework:** Astro en modo **SSR (Server-Side Rendering)** con adaptador para Netlify.
- **CMS:** Decap CMS configurado en la ruta `/admin`.
- **Colecciones de Contenido:**
  - `pages`: Para páginas estáticas (Home).
  - `proyectos`: Para el portafolio. Utiliza slugs limpios controlados desde el CMS.
  - `ajustes`: Para configuraciones globales, como la selección de 0 a 3 proyectos destacados.
- **Funcionalidades:**
  - Renderizado de página de inicio con proyectos destacados.
  - Galería de todos los proyectos en `/proyectos`.
  - Páginas de detalle dinámicas para cada proyecto.