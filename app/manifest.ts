import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0e",
    theme_color: "#0c0c0e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    id: SITE_URL,
  }
}
