import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
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
      height: {
				'halfscreen': '50vh',
				'70screen': '70vh',
				'90screen': '90vh'
			},
      colors: {
				btn: '#ff8038',
				txt:'#ff8038',
				brand:{
					darkest:"#f4dca8",
					dark:"#fffce1",
					light:"#f6f6ef",
				}  
			}
    },
  },
  plugins: [],
};
export default config;
