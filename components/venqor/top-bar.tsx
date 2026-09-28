import { VenqorLogo } from "@/components/venqor/venqor-logo"

const LOGIN_URL = "https://app.venqor.app/login"

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-3.5 md:px-8">
      <div className="absolute inset-0 border-b border-slate-200/70 bg-white/70 backdrop-blur-md" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" aria-label="Venqor — accueil">
          <VenqorLogo size="navbar" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#booking"
            className="hidden rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Planifier un échange
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-900 transition-colors hover:border-primary/40"
          >
            Se connecter
          </a>
        </div>
      </div>
    </header>
  )
}
