import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{css,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
				mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
} satisfies Config;
