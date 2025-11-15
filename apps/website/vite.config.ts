import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const MODE = process.env.NODE_ENV;

export default defineConfig({
  build: {
    target: 'es2022',
    cssMinify: MODE === 'production',

    rollupOptions: {
      external: [/node:.*/, 'fsevents'],
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
