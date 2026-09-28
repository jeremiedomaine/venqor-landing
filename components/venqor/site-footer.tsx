import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { CTA_PRIMARY } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white px-4 py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <VenqorLogo size="md" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            L&apos;infrastructure digitale des domaines de réception
            d&apos;exception.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-medium text-ink">Produit</p>
            <ul className="space-y-2 text-ink-soft">
              <li>
                <a href="#swas" className="hover:text-primary">
                  Done-for-you
                </a>
              </li>
              <li>
                <a href="#piliers" className="hover:text-primary">
                  Piliers
                </a>
              </li>
              <li>
                <a href="#modele" className="hover:text-primary">
                  Modèle
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
            <p className="mb-3 font-medium text-ink">Contact</p>
            <ul className="space-y-2 text-ink-soft">
              <li>
                <a href="#booking" className="hover:text-primary">
                  {CTA_PRIMARY}
                </a>
              </li>
              <li>
                <a
                  href="https://app.venqor.app/login"
                  className="hover:text-primary"
                >
                  Connexion
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 font-medium text-ink">Positionnement</p>
            <p className="text-ink-soft">
              SwaS premium · Domaines d&apos;exception · France
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Venqor. Tous droits réservés.
      </div>
    </footer>
  )
}
