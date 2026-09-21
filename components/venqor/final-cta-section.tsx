import { CalendarDays } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative px-4 py-20">
      <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200/90 bg-white/90 px-8 py-12 text-center shadow-lg md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Envie de voir comment Venqor peut s&apos;adapter à votre domaine&nbsp;?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Prenons 15 minutes pour échanger sur le fonctionnement de votre lieu et
          voir si notre outil correspond à vos besoins.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            <CalendarDays className="h-4 w-4" />
            Planifier un échange
          </a>
        </div>
      </div>
    </section>
  )
}
