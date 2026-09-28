import { CalendarDays } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative bg-section-soft px-4 py-24">
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-slate-900 md:text-4xl">
          Envie de voir comment Venqor peut s&apos;adapter à votre domaine&nbsp;?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
          Prenons 15 minutes pour échanger sur le fonctionnement de votre lieu et
          voir si notre outil correspond à vos besoins.
        </p>
        <a
          href="#booking"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-primary/90"
        >
          <CalendarDays className="h-4 w-4" />
          Planifier un échange
        </a>
      </div>
    </section>
  )
}
