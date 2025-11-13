/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				purple: {
					50: '#f3e8ff',
					100: '#e9d5ff',
					200: '#d8b4fe',
					300: '#c084fc',
					400: '#a855f7',
					500: '#9333ea',
					600: '#7e22ce',
					700: '#6b21a8',
					800: '#581c87',
					900: '#4c1d95'
				}
			}
		}
	},
	plugins: []
};

