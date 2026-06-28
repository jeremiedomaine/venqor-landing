"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionShell } from "@/components/venqor/section-shell"

const faqs = [
  {
    q: "Venqor remplace ma compta ?",
    a: "Non. Venqor suit vos dossiers et encaissements ; vos factures légales restent dans votre logiciel comptable habituel.",
  },
  {
    q: "Mes clients doivent-ils s’inscrire ?",
    a: "Non. Ils reçoivent un lien privé vers leur page client : échéancier, coordonnées bancaires et déclaration de virement — sans création de compte.",
  },
  {
    q: "Uniquement les mariages ?",
    a: "Non. Mariage par défaut, plus « Autre événement » et types personnalisés (séminaire, anniversaire, privatisations…).",
  },
  {
    q: "Comment les paiements sont-ils confirmés ?",
    a: "Le client déclare son virement depuis sa page ; vous confirmez ou rejetez depuis Venqor après vérification sur votre compte bancaire.",
  },
  {
    q: "Puis-je personnaliser les emails et relances ?",
    a: "Oui — objets, introductions et déclencheurs (avant/après échéance, relance contrat, alertes domaine) sont configurables par type et statut d’événement.",
  },
  {
    q: "Paiement par carte bancaire ?",
    a: "Aujourd’hui, le flux principal est le virement IBAN affiché sur la page client. Simple, traçable, adapté au marché français des lieux de réception.",
  },
]

export function FAQSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions fréquentes"
      description="Les réponses aux questions que se posent les gérants de domaines avant de rejoindre Venqor."
      className="bg-paper-texture"
    >
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-slate-200/90 bg-white px-6 shadow-sm"
      >
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  )
}
