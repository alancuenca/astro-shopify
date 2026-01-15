import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your production domain
  site: "https://your-store.netlify.app",
  output: "server",
  adapter: netlify(),

  integrations: [
    svelte(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
