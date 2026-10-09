import { CTA_SECONDARY } from "@/lib/site"
import { SectionShell } from "@/components/venqor/section-shell"
import { OrnamentDivider } from "@/components/venqor/ornaments"

export function PricingSection() {
  return (
    <SectionShell
      id="modele"
      eyebrow="Modèle économique"
      title="Setup complet clés en main."
      description="Modélisation de l'architecture, intégration de la marque et formation du staff — livrés sans que vous ayez à paramétrer quoi que ce soit."
      className="bg-section-alt"
    >
      <div className="mx-auto max-w-lg border border-slate-200 bg-white px-10 py-14 text-center">
        <p className="eyebrow">Setup complet clés en main</p>
        <p className="mt-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          Sur devis
        </p>
        <p className="mt-3 text-lg font-medium text-slate-900">Clés en main</p>
        <p className="mt-4 text-sm font-normal text-slate-600">
          Modélisation · Intégration de la marque · Formation du staff — tarif
          présenté lors de la modélisation, adapté à votre domaine.
        </p>

        <OrnamentDivider className="mt-10" />

        <p className="mt-10 text-sm font-normal leading-relaxed text-slate-600">
          Puis une{" "}
          <span className="font-medium text-slate-900">
            licence mensuelle de maintenance
          </span>{" "}
          — hébergement sécurisé et SAV inclus. Le détail vous est présenté lors
          de la modélisation.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Premium · Done-for-you
        </div>

        <a href="#booking" className="btn-primary mt-10">
          {CTA_SECONDARY}
        </a>
      </div>
    </SectionShell>
  )
}
