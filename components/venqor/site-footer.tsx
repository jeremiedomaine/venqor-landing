import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-900 px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-14 md:flex-row md:items-start md:justify-between">
        <div>
          <VenqorLogo size="md" inverted />
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-300">
              Produit
            </p>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#exemple" className="hover:text-white">
                  Exemple
                </a>
              </li>
              <li>
                <a href="#organisation" className="hover:text-white">
                  Organisation
                </a>
              </li>
              <li>
                <a href="#swas" className="hover:text-white">
                  Done-for-you
                </a>
              </li>
              <li>
                <a href="#modele" className="hover:text-white">
                  Setup
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-300">
              Contact
            </p>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#exemple" className="hover:text-white">
                  {CTA_PRIMARY}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white">
                  {CTA_SECONDARY}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-300">
              Venqor
            </p>
            <p className="text-white/70">
              Paris, France · Infrastructure digitale pour domaines
              d&apos;exception
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-5xl border-t border-white/10 pt-8 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Venqor. Tous droits réservés.
      </div>
    </footer>
  )
}
