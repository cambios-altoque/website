import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    hmr: {
      clientPort: 3000,
    },
    watch: {
      usePolling: true,
    },
  },
};

export default config;
