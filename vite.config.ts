// https://vitejs.dev/config/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/react-template/',
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
