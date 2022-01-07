import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';
import cloudflare from '@sveltejs/adapter-cloudflare';
//import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default {
	preprocess: sveltePreprocess(),
	kit: {
		target: '#svelte',
		adapter: cloudflare({
			// any esbuild options
		})
	}
};
