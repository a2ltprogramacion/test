/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Definición de Colores Corporativos (Mapeados a variables CSS)
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				text: 'rgb(var(--color-text) / <alpha-value>)',
			},
			// Definición de Tipografías (Aquí estaba el error)
			fontFamily: {
				sans: ['"Nunito"', 'sans-serif'],
				heading: ['"Red Hat Display"', 'sans-serif'], // <--- Esta es la clave que faltaba
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // Necesario para los bloques de Markdown (clase 'prose')
	],
}