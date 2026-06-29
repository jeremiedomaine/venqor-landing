import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.venqor.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Venqor — Infrastructure financière pour lieux de réception",
    template: "%s | Venqor",
  },
  description:
    "Venqor centralise contrats, acomptes et relances pour châteaux, domaines et lieux de réception. Pipeline, page client et pilotage saisonnier.",
  keywords: [
    "Venqor",
    "lieux de réception",
    "château mariage",
    "domaine événementiel",
    "gestion acomptes",
    "contrat signature",
    "SaaS réception",
  ],
  authors: [{ name: "Venqor" }],
  creator: "Venqor",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Venqor",
    title: "Venqor — Infrastructure financière pour lieux de réception",
    description:
      "Centralisez vos contrats, sécurisez vos encaissements et automatisez la gestion financière de votre domaine.",
    images: [{ url: "/icon-192.png", width: 192, height: 192, alt: "Venqor" }],
  },
  twitter: {
    card: "summary",
    title: "Venqor — Lieux de réception",
    description:
      "Pipeline, contrats, acomptes et page client pour châteaux et domaines.",
    images: ["/icon-192.png"],
  },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon-32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
