import {
  BarChart3,
  Bell,
  Columns3,
  FileText,
  Globe,
  Wallet,
} from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const features = [
  {
    icon: Columns3,
    title: "Pipeline",
    subtitle: "Cœur opérationnel",
    description:
      "Kanban et calendrier des dossiers actifs. Demande → Date bloquée → Confirmé → Clôturé. Vue des virements à confirmer.",
    benefit: "Une seule source de vérité — fini le « où en est ce dossier ? »",
  },
  {
    icon: FileText,
    title: "Contrat électronique",
    subtitle: "Signable intégré",
    description:
      "Envoi depuis un dossier en date bloquée. Signatures en ligne, modèle PDF/DOCX personnalisable (noms, dates, montants…).",
    benefit: "Moins d’allers-retours, dossier engagé plus vite.",
  },
  {
    icon: Wallet,
    title: "Facturation & échéancier",
    subtitle: "Règles métier",
    description:
      "Acompte % + solde %, libellés et échéances (ex. solde à J-30). Génération auto au blocage de date.",
    benefit: "Fini les échéanciers recopiés à la main.",
  },
  {
    icon: Globe,
    title: "Page client",
    subtitle: "Portail sans compte",
    description:
      "Lien unique par dossier : échéancier, RIB, déclaration de virement, infos pratiques. « Espace mariés » ou « Espace client ».",
    benefit: "Clients autonomes — moins de mails « voici notre RIB ».",
  },
  {
    icon: Bell,
    title: "Automatisations",
    subtitle: "Relances configurables",
    description:
      "Emails acompte et solde (J-30), relances contrat, alertes domaine — filtres par type et statut d’événement.",
    benefit: "La relance ne repose plus sur la mémoire de l’équipe.",
  },
  {
    icon: BarChart3,
    title: "Pilotage",
    subtitle: "Vue direction",
    description:
      "Objectifs annuels, CA confirmé/clôturé, calendrier mensuel avec CA, projection pluriannuelle et pipeline du jour.",
    benefit: "Anticiper la saison, pas seulement éteindre les feux.",
  },
]

export function FeaturesSection() {
  return (
    <SectionShell
      id="fonctionnalites"
      eyebrow="Fonctionnalités"
      title="Tout ce qu’il faut pour piloter votre domaine."
      description="Six modules pensés pour les lieux de réception — du premier contact à l’encaissement."
      className="bg-white/60"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, subtitle, description, benefit }) => (
          <article
            key={title}
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-slate-900">
                  {title}
                </h3>
                <p className="text-xs font-medium text-primary">{subtitle}</p>
              </div>
            </div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
              {description}
            </p>
            <p className="border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              <span className="font-medium text-slate-700">Bénéfice : </span>
              {benefit}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
