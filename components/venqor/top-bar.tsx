import { CTA_SECONDARY } from "@/lib/site"
import { VenqorLogo } from "@/components/venqor/venqor-logo"

const LOGIN_URL = "https://app.venqor.app/login"

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px]">
      <div className="absolute inset-0 border-b border-slate-200 bg-white/80 backdrop-blur-md" />
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#" aria-label="Venqor — accueil">
          <VenqorLogo size="navbar" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
          <a href="#exemple" className="transition-colors hover:text-slate-900">
            Produit
          </a>
          <a href="#organisation" className="transition-colors hover:text-slate-900">
            Organisation
          </a>
          <a href="#modele" className="transition-colors hover:text-slate-900">
            Setup
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-900">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            className="hidden text-sm text-slate-500 transition-colors hover:text-slate-900 sm:inline"
          >
            Se connecter
          </a>
          <a href="#booking" className="btn-primary !py-2.5 text-xs md:text-sm">
            {CTA_SECONDARY}
          </a>
        </div>
      </div>
    </header>
  )
}
