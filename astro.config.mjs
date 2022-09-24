import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/functions";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://astro-poux.netlify.app/',
  integrations: [tailwind(), react(), image(), sitemap()],
  output: "server",
  adapter: netlify()
});