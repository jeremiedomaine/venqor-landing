import { VenqorLogo } from "@/components/venqor/venqor-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 px-4 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <VenqorLogo size="md" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            Le cockpit de votre domaine — demandes, contrats, acomptes et relances au même endroit.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-medium text-slate-900">Produit</p>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#fonctionnalites" className="hover:text-primary">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-primary">
                  Parcours
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-medium text-slate-900">Accès</p>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#booking" className="hover:text-primary">
                  Démo
                </a>
              </li>
              <li>
                <a
                  href="https://acceuil.venqor.app/login"
                  className="hover:text-primary"
                >
                  Connexion
                </a>
              </li>
              <li>
                <a
                  href="https://app.venqor.app"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Application
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 font-medium text-slate-900">Marché</p>
            <p className="text-slate-600">
              France · Lieux de réception · Francophone
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl border-t border-slate-200/80 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Venqor. Tous droits réservés.
      </div>
    </footer>
  )
}
