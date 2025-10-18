
import { describe, it, expect } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JSDOM } from 'jsdom';

// Esta función simula de forma muy básica cómo Astro podría renderizar el layout.
// Lee el contenido del layout y lo carga en un DOM virtual.
async function getDomFromLayout(): Promise<Document> {
  const layoutPath = path.resolve(process.cwd(), 'src/layouts/Layout.astro');
  const layoutContent = await fs.readFile(layoutPath, 'utf-8');
  const dom = new JSDOM(layoutContent);
  return dom.window.document;
}

describe('TDD - Landing Page Title', () => {
  it('Fase ROJA: El <title> de la página debe ser el definido en el frontmatter de home.md', async () => {
    // 1. OBTENER el título esperado desde la fuente de verdad (el CMS)
    const mdPath = path.resolve(process.cwd(), 'src/content/pages/home.md');
    const fileContent = await fs.readFile(mdPath, 'utf-8');
    const { data } = matter(fileContent);
    const expectedTitle = data.title;

    // 2. OBTENER el DOM actual renderizado (simulado)
    const document = await getDomFromLayout();
    const actualTitle = document.title;

    // 3. VERIFICAR
    // La prueba fallará porque `actualTitle` será "Astro Basics" (hardcodeado en el layout)
    // y no el `expectedTitle` del CMS.
    expect(actualTitle).toBe(expectedTitle);
  });
});
