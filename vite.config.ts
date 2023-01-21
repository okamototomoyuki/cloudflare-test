import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3897,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['.yarn'],
		},
	},
	preview: {
		port: 3897
	}
};

export default config;
