// https://vitejs.dev/config/

import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      tsconfigPaths(),
      mkcert(),
      checker({ typescript: true }),
    ],
    server: {
      open: true,
      https: true,
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  };
});
