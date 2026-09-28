"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionShell } from "@/components/venqor/section-shell"
import { faqs } from "@/lib/faq"

export function FAQSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions fréquentes"
      className="bg-white"
    >
      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-2xl border-y border-slate-200"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`item-${i}`}
            className="border-slate-200"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-slate-900 hover:no-underline md:text-[0.95rem]">
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
