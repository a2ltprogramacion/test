/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
        screens: {
      // NUEVO BREAKPOINT para 1366px y más grande
      'desktop-med': '1366px', 
      // NUEVO BREAKPOINT para 1920px y más grande
      'desktop-lg': '1920px',
      // Breakpoints predeterminados de Tailwind
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
