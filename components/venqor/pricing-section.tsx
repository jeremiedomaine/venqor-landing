import { CTA_PRIMARY } from "@/lib/site"
import { SectionShell } from "@/components/venqor/section-shell"

export function PricingSection() {
  return (
    <SectionShell
      id="modele"
      eyebrow="Modèle économique"
      title="Un setup premium. Une clarté totale."
      description="Nous assumons un ticket d'entrée à la hauteur de l'exécution : modélisation, intégration financière et formation — livrés clés en main."
      className="bg-paper-lux"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Setup complet clés en main
        </p>
        <p className="mt-4 font-display text-6xl font-medium tracking-tight text-ink md:text-7xl">
          2&nbsp;000&nbsp;€
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          Modélisation · Intégration financière · Formation de l&apos;équipe
        </p>

        <div className="mx-auto mt-10 h-px w-24 bg-border" />

        <p className="mt-10 text-sm leading-relaxed text-ink-soft">
          Puis une{" "}
          <span className="font-medium text-ink">
            licence de maintenance mensuelle
          </span>{" "}
          pour l&apos;hébergement sécurisé, le support et les mises à jour —
          détaillée lors de l&apos;étude de modélisation.
        </p>

        <a
          href="#booking"
          className="mt-10 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {CTA_PRIMARY}
        </a>
      </div>
    </SectionShell>
  )
}
