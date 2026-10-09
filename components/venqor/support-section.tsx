import { Headphones, Shield } from "lucide-react"

export function SupportSection() {
  return (
    <section id="support" className="bg-section-dark px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-5 !text-indigo-300">Bouclier anti-stress</p>
          <h2 className="text-balance font-sans text-[32px] font-medium leading-[1.15] tracking-[-0.01em] text-white md:text-[42px]">
            Nous gérons le support technique. Vous restez serein.
          </h2>
          <p className="mt-5 font-normal leading-[1.6] text-white/70 md:text-lg">
            Si un marié ou un invité a la moindre question sur l&apos;utilisation
            de l&apos;application, notre équipe s&apos;occupe du SAV. Vos équipes
            ne sont jamais sollicitées pour de l&apos;assistance technique. Vous
            offrez un service premium, sans y passer une seule minute.
          </p>
        </div>

        <div className="grid border border-white/15 sm:grid-cols-2">
          <div className="border-b border-white/15 p-8 sm:border-b-0 sm:border-r sm:p-10">
            <Headphones className="mb-4 h-5 w-5 text-indigo-300" strokeWidth={1.25} />
            <h3 className="font-sans text-[24px] font-semibold text-white md:text-[28px]">
              SAV dédié
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Questions d&apos;usage, accès, répartition — notre équipe répond à
              votre place.
            </p>
          </div>
          <div className="p-8 sm:p-10">
            <Shield className="mb-4 h-5 w-5 text-indigo-300" strokeWidth={1.25} />
            <h3 className="font-sans text-[24px] font-semibold text-white md:text-[28px]">
              Zéro charge staff
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Votre équipe reste sur l&apos;accueil et l&apos;expérience in situ —
              pas sur le support digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
