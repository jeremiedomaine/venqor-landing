import { DomainRoutePreview } from "@/components/venqor/domain-route-preview"
import { SectionShell } from "@/components/venqor/section-shell"
import { OrnamentDivider } from "@/components/venqor/ornaments"

export function WowSection() {
  return (
    <SectionShell
      id="exemple"
      eyebrow="Argument de prestige"
      title="Le nouveau standard du mariage haut de gamme."
      description="Côté mariés : une application élégante aux couleurs du domaine. Côté équipes : une feuille de route J-15 consolidée — allergies par table, horaires prestataires, export staff sans prix."
      className="bg-section-muted"
    >
      <OrnamentDivider className="mb-12" />
      <div className="border border-slate-200 bg-white">
        <DomainRoutePreview />
      </div>
    </SectionShell>
  )
}
