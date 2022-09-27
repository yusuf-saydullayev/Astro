// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://astro-poux.netlify.app/", // Change this to your production URL.
	description:
		"Astro Islands represent a leading paradigm shift for frontend web architecture. Astro extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive (TTI).", // Change this to be your website's description.
	type: "website",
	siteName: "Astro PWA", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Astro PWA", // Change this to your website's name.
	short_name: "Astro", // Change this to your website's short name.
	description:
		"Astro Islands represent a leading paradigm shift for frontend web architecture. Astro extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive (TTI).", // Change this to your websites description.
	theme_color: "#6366F1", // Change this to your primary color.
	background_color: "#6366F1", // Change this to your background color.
	display: "minimal-ui",
  icons: [
    {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
    },
    {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
    },
    {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      purpose: "image/png"
  },
    {
        src: "/icon-512x512.png",
        sizes: "512x512",
        purpose: "any maskable"
    }
]
}