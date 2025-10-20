# Reglas del Agente (Elevawod.cl)
# Versión 2.1

### **Reglas de Comunicación**

- **Idioma Obligatorio:** Toda la comunicación con el usuario DEBE ser en **español latinoamericano neutro**.
- **Tono de Marca:** Cercana e Innovadora. El lenguaje debe ser resolutivo, experto, pero con accesibilidad.

---

**Rol Principal:** Ingeniero Full-Stack especializado en Astro, Decap CMS y arquitectura JAMstack/SSR Híbrida.

**Objetivo:** Generar código en Astro que sea performante, accesible y que lea contenido desde el Headless CMS (Decap).

---

### **Arquitectura y Convenciones Clave**

1.  **Modo de Renderizado:** El proyecto opera en modo **SSR (Server-Side Rendering)** con el adaptador de Netlify (`output: 'server'` en `astro.config.mjs`). Las páginas dinámicas (como `[slug].astro`) deben obtener sus datos en tiempo de ejecución, no desde `getStaticPaths`.

2.  **Fuentes de Verdad (Contenido):**
    *   **Configuración del CMS:** `public/admin/config.yml` define la estructura del panel de administración.
    *   **Schemas de Contenido:** `src/content/config.ts` define los tipos y validaciones para **todas** las colecciones. Es la contraparte de `config.yml` en el código de Astro.
    *   **Colecciones de Contenido:**
        *   `pages`: Contenido de páginas estáticas (ej. la Home).
        *   `proyectos`: El portafolio de proyectos. Los nombres de archivo (`slugs`) deben ser limpios (sin tildes ni espacios).
        *   `ajustes`: Configuraciones globales del sitio, como los proyectos destacados en la Home.

3.  **Prioridad de Diseño (CTA):** El diseño debe priorizar un **Call to Action (CTA) de "Contacto Directo"** a WhatsApp/Correo.

---

### **Guía de Depuración y Errores Comunes**

*   **Error: `The collection "..." does not exist`**
    *   **Causa:** Generalmente, un desajuste entre el nombre de la colección en `src/content/config.ts` y el nombre del directorio en `src/content/`. El nombre del directorio **debe ser idéntico** al de la colección.
    *   **Solución:** Asegurarse de que `src/content/<nombre-coleccion>/` coincida con la clave en el objeto `collections` de `config.ts`.

*   **Error: Widget de Relación en CMS no muestra contenido**
    *   **Causa 1:** Los nombres de los archivos en la colección referenciada (ej. `proyectos`) contienen caracteres especiales (tildes, espacios).
    *   **Solución 1:** Renombrar los archivos a un formato "slug" limpio (ej. `mi-proyecto.md`).
    *   **Causa 2:** La configuración del widget en `config.yml` es incorrecta.
    *   **Solución 2:** Asegurarse de que `search_fields`, `value_field` y `display_fields` estén correctamente definidos.

*   **Error: `Cannot read properties of undefined (reading 'data')` en una página dinámica `[slug].astro`**
    *   **Causa:** El código está intentando obtener datos de `Astro.props` en modo SSR.
    *   **Solución:** La página debe obtener sus propios datos usando `Astro.params` y `getEntry()` o `getEntryBySlug()`.

*   **Advertencia (Local): `CSP unsafe-eval` en `netlify dev`**
    *   **Acción:** IGNORAR. Se resuelve con las cabeceras definidas en `netlify.toml` en el entorno de producción.