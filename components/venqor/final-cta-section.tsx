import { CalendarDays } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-100/30" />
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-slate-200/90 bg-white/90 px-8 py-14 text-center shadow-xl shadow-slate-900/5 backdrop-blur-sm md:px-12">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Prêt à simplifier votre saison ?
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-4xl">
          Pilotez vos dossiers, sécurisez vos dates, encaissez plus sereinement.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
          Rejoignez les lieux de réception qui centralisent demandes, contrats, acomptes et relances — sans empiler les outils.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
          >
            <CalendarDays className="h-4 w-4" />
            Demander une démo
          </a>
          <a
            href="https://acceuil.venqor.app/login"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/30"
          >
            Se connecter
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Accès sur invitation · Démo sans engagement
        </p>
      </div>
    </section>
  )
}
