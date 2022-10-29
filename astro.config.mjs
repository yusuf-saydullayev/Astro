import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-poux.netlify.app/',
  integrations: [tailwind(), react(), image({ serviceEntryPoint: '@astrojs/image/sharp' }), sitemap()],
  output: 'server',
  adapter: netlify(),
})
