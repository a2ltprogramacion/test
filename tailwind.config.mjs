/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0A253F',      // Azul oscuro corporativo (de agencialean.cl)
        'secondary': '#F6F1E7',    // Blanco cálido para fondos (de brandcrops.com)
        'accent': '#FF6F3C',       // Naranja brillante para CTAs (de agencialean.cl)
        'text-base': '#0A253F',   // Texto principal sobre fondos claros
        'text-inverted': '#FFFFFF', // Texto sobre fondos oscuros
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'], // Fuente legible para párrafos
        'serif': ['Playfair Display', 'serif'], // Fuente elegante para títulos
      },
    },
  },
  plugins: [],
}
