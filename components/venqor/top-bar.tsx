import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { CTA_PRIMARY } from "@/lib/site"

const LOGIN_URL = "https://app.venqor.app/login"

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-4 md:px-10">
      <div className="absolute inset-0 border-b border-white/10 bg-[#0c0c0e]/70 backdrop-blur-xl" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" aria-label="Venqor — accueil">
          <VenqorLogo size="navbar" inverted />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {CTA_PRIMARY}
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:text-white"
          >
            Se connecter
          </a>
        </div>
      </div>
    </header>
  )
}
