import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/functions";
import { VitePWA } from 'vite-plugin-pwa';

import { manifest, seoConfig } from "./utils/seoConfig"


// https://astro.build/config
export default defineConfig({
  site:'https://astro-poux.netlify.app/',
  integrations: [tailwind(), react(), image(), sitemap()],
  vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	},
  output: "server",
  adapter: netlify()
});