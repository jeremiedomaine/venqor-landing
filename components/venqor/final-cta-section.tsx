import { CTA_PRIMARY } from "@/lib/site"

export function FinalCTASection() {
  return (
    <section className="relative bg-hero-lux px-4 py-28 text-center text-white">
      <div className="relative mx-auto max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Prochaine étape
        </p>
        <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
          Prêt à supprimer la friction de votre domaine&nbsp;?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/60 md:text-[0.95rem]">
          Demandez une étude de modélisation. Nous auditons votre organisation
          hébergement / invités et vous présentons le déploiement clés en main.
        </p>
        <a
          href="#booking"
          className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          {CTA_PRIMARY}
        </a>
      </div>
    </section>
  )
}
