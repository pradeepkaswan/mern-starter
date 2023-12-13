import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {},
		extend: {
			colors: {},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			keyframes: {},
			borderRadius: {},
			animation: {},
		},
	},
	plugins: [],
};
