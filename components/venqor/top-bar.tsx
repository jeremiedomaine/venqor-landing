import { VenqorLogo } from "@/components/venqor/venqor-logo"

const LOGIN_URL = "https://app.venqor.app/login"

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="absolute inset-0 border-b border-slate-200/80 bg-white/75 backdrop-blur-md" />

      <div className="relative">
        <VenqorLogo size="navbar" />
      </div>

      <a
        href={LOGIN_URL}
        className="relative rounded-lg border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/40 hover:bg-white"
      >
        Se connecter
      </a>
    </header>
  )
}
