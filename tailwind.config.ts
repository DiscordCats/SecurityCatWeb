import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',

	// https://coolors.co/palette/ffb5a7-fcd5ce-f8edeb-f9dcc4-fec89a

	theme: {
		extend: {
			colors: {
				primary: {
					1: '#FFB5A7',
					2: '#FCD5CE',
					3: '#F8EDEB',
					4: '#F9DCC4',
					5: '#FEC89A'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), flowbitePlugin]
} as Config;
