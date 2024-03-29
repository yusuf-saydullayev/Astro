import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import image from '@astrojs/image';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://astro-poux.netlify.app/',
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  output: 'server',
  adapter: netlify()
});