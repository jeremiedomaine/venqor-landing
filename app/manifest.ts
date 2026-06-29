import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Infrastructure financière pour châteaux, domaines et lieux de réception.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#4F46E5",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    id: SITE_URL,
  }
}
