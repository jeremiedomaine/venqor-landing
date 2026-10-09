import { OrnamentDivider } from "@/components/venqor/ornaments"

export function QuoteSection() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-3xl text-center">
        <OrnamentDivider className="mb-10" />
        <blockquote className="font-sans text-[28px] font-normal italic leading-[1.25] text-primary md:text-[36px]">
          « Vous n&apos;achetez pas un logiciel. Vous offrez à vos mariés
          l&apos;extension digitale de votre prestige. »
        </blockquote>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
          La promesse Venqor
        </p>
      </div>
    </section>
  )
}
