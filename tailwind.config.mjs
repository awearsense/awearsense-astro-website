/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'10xl': ['10rem', {
					lineHeight: '9rem',
					letterSpacing: '-0.01em',
					fontWeight: '500',
				}],
				'12xl': ['12rem', {
					lineHeight: '10rem',
					letterSpacing: '-0.01em',
					fontWeight: '500',
				}],
				'large': ['16rem', {
					lineHeight: '10rem',
					letterSpacing: '-0.01em',
					fontWeight: '500',
				}],
				'largest': ['20rem', {
					lineHeight: '10rem',
					letterSpacing: '-0.01em',
					fontWeight: '800',
				}]
			},
			fontFamily: {
				'DM-Sans': ["DM Sans", "serif"],
			},
			height: {
				'halfscreen': '50vh',
				'70screen': '70vh',
				'90screen': '90vh'
			},
			colors: {
				btn: '#00C805'
			}
		},
	},
	plugins: [],
}
