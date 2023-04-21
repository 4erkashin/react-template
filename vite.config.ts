// https://vitejs.dev/config/

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_URL,
    plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  };
});
