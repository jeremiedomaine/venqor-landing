import { BedDouble, ClipboardList, HeartHandshake } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const points = [
  {
    icon: BedDouble,
    title: "Répartition visuelle des couchages",
    text: "Vos mariés placent leurs invités dans vos dizaines de chambres depuis l'application.",
  },
  {
    icon: HeartHandshake,
    title: "RSVP & allergies au même endroit",
    text: "Les invités confirment leur présence et leurs contraintes alimentaires sans e-mails éparpillés.",
  },
  {
    icon: ClipboardList,
    title: "Fiche de route définitive",
    text: "Quelques jours avant l'événement, vous recevez une synthèse claire, prête pour vos équipes.",
  },
]

export function OrganizationSection() {
  return (
    <SectionShell
      id="organisation"
      eyebrow="Zéro friction"
      title="Une organisation centralisée. Fini les allers-retours."
      description="Vos mariés gèrent la répartition de vos dizaines de couchages visuellement depuis l'application. Les invités confirment leur présence et leurs allergies au même endroit. Quelques jours avant l'événement, vous recevez une fiche de route parfaite, claire et définitive."
      className="bg-section-muted"
    >
      <div className="grid border border-slate-200 md:grid-cols-3">
        {points.map((point, i) => {
          const Icon = point.icon
          return (
            <article
              key={point.title}
              className={`bg-white p-8 md:p-10 ${
                i < points.length - 1 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <Icon className="h-5 w-5 text-indigo-300" strokeWidth={1.25} />
                <span className="font-mono text-[11px] tracking-[0.1em] text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-sans text-[24px] font-semibold leading-[1.2] text-slate-900 md:text-[28px]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
                {point.text}
              </p>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
