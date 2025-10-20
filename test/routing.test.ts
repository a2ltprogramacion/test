import { describe, it, expect } from 'vitest';

// La URL base del servidor de desarrollo de Astro. 
// Netlify Dev puede usar un puerto diferente, pero las pruebas de Vitest
// a menudo se ejecutan contra el servidor de Astro directamente.
// Para ser robustos, asumiremos que las pruebas se ejecutan en el mismo host.
const BASE_URL = 'http://localhost:4321'; // Puerto por defecto de `astro dev`

describe('Flujo de Navegación y Rutas Principales', () => {

  it('La página de inicio (/) se carga correctamente', async () => {
    const response = await fetch(`${BASE_URL}/`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain('<h1>Un socio tecnológico, no un proveedor más.</h1>');
  });

  it('La página de todos los proyectos (/proyectos) se carga correctamente', async () => {
    const response = await fetch(`${BASE_URL}/proyectos`);
    expect(response.status).toBe(200);
  });

  it('Una página de detalle de proyecto existente (ej. /proyectos/proyecto-1) se carga correctamente', async () => {
    // Asumimos que existe un proyecto con slug 'proyecto-1'
    const response = await fetch(`${BASE_URL}/proyectos/proyecto-1`);
    const html = await response.text();

    expect(response.status).toBe(200);
    // Verificamos que el título del proyecto esté en el H1 de la página de detalle
    expect(html).toContain('<h1>Proyecto #1 Titulo</h1>');
  });

  it('Una página de detalle de proyecto que no existe devuelve un 404', async () => {
    const response = await fetch(`${BASE_URL}/proyectos/este-slug-no-deberia-existir`);
    expect(response.status).toBe(404);
  });

});
