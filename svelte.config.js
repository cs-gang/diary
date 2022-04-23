import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';


export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter()
  }
};
