// https://vitejs.dev/config/

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import autoprefixer from 'autoprefixer';
import mkcert from 'vite-plugin-mkcert';

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
