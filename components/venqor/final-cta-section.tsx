import { CTA_SECONDARY } from "@/lib/site"
import { OrnamentDivider } from "@/components/venqor/ornaments"

export function FinalCTASection() {
  return (
    <section className="bg-section-dark px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-5 !text-indigo-300">Prochaine étape</p>
        <h2 className="font-sans text-[32px] font-medium leading-[1.15] tracking-[-0.01em] text-white md:text-[42px]">
          Offrez à vos mariés une expérience digne de votre domaine.
        </h2>
        <OrnamentDivider className="my-10" />
        <p className="mx-auto max-w-md font-normal leading-[1.6] text-white/70 md:text-lg">
          Demandez une modélisation. Nous étudions votre architecture
          d&apos;hébergement et vous présentons l&apos;application clés en main.
        </p>
        <a href="#booking" className="btn-on-dark mt-10">
          {CTA_SECONDARY}
        </a>
      </div>
    </section>
  )
}
