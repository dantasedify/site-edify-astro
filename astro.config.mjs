import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import react from "@astrojs/react";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    AutoImport({
      imports: ["@/layouts/shortcodes/Points.jsx"],
    }),
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
