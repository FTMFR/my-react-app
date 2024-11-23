import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';  // Import 'path' here

// This workaround is needed to get __dirname in the Vite build environment
// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': dirname(fileURLToPath(import.meta.url)) + '/src',  // Path alias using __dirname workaround
    },
  },
});
