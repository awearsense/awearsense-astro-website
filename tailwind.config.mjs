/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
				  'Poppins', 'sans-serif'
				]
			}, 
			fontSize: {
				'6xl': ['9rem', {
				  lineHeight: '9rem',
				  letterSpacing: '-0.01em',
				  fontWeight: '500',
				}],
				'2xl': ['1.875rem', {
				  lineHeight: '2.25rem',
				  letterSpacing: '0.01em',
				  fontWeight: '100',
				}],
			}
		},
	},
	plugins: [],
}
