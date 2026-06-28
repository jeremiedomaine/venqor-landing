import { CalendarDays } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative px-4 py-20">
      <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200/90 bg-white/90 px-8 py-12 text-center shadow-lg md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Prêt à piloter votre saison ?
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Une démo de 25 min, sans engagement.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md"
          >
            <CalendarDays className="h-4 w-4" />
            Demander une démo
          </a>
          <a
            href="https://acceuil.venqor.app/login"
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900"
          >
            Se connecter
          </a>
        </div>
      </div>
    </section>
  )
}
