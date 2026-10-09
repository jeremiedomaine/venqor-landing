"use client"

import {
  BedDouble,
  CalendarHeart,
  MapPin,
  UtensilsCrossed,
  Users,
} from "lucide-react"

const rooms = [
  {
    name: "Suite Olive",
    capacity: "2 pers.",
    guests: ["Clara", "Julien"],
    tag: "Mariés",
    filled: true,
  },
  {
    name: "Chambre Lavande",
    capacity: "3 pers.",
    guests: ["Fam. Martin", "Léa"],
    tag: "Lit bébé",
    filled: true,
  },
  {
    name: "Studio Figuier",
    capacity: "2 pers.",
    guests: ["Amis d'honneur"],
    tag: "Gluten",
    filled: true,
  },
  {
    name: "Chambre Romarin",
    capacity: "2 pers.",
    guests: [],
    tag: "Libre",
    filled: false,
  },
]

const guests = [
  { name: "Sophie M.", status: "Oui", allergy: null },
  { name: "Thomas R.", status: "Oui", allergy: "Fruits de mer" },
  { name: "Inès L.", status: "En attente", allergy: null },
]

/** Mockup application mariage — style éditorial B2B, radius 0 / 2px max */
export function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="h-2 w-2 bg-slate-300" />
        <span className="h-2 w-2 bg-slate-300" />
        <span className="h-2 w-2 bg-slate-300" />
        <div className="mx-2 flex h-7 flex-1 items-center justify-center border border-slate-300 bg-white px-3">
          <span className="font-mono text-[10px] tracking-wide text-slate-500 sm:text-[11px]">
            clara-julien.domaine-des-pins.app
          </span>
        </div>
      </div>

      <div className="relative border-b border-slate-200 bg-primary px-5 py-7 text-white md:px-8 md:py-8">
        <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Domaine des Pins vous accueille
            </p>
            <h3 className="mt-2 font-sans text-3xl font-normal tracking-[-0.02em] md:text-4xl">
              Clara <span className="italic text-indigo-300">&</span> Julien
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <CalendarHeart className="h-3.5 w-3.5 text-indigo-300" strokeWidth={1.25} />
                Samedi 19 juin 2027
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-indigo-300" strokeWidth={1.25} />
                42 couchages · Provence
              </span>
            </div>
          </div>

          <div className="flex gap-3 self-start md:self-end">
            <div className="rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                RSVP
              </p>
              <p className="mt-0.5 font-sans text-[36px] font-semibold leading-none tabular-nums text-white">
                86%
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                Chambres
              </p>
              <p className="mt-0.5 font-sans text-[36px] font-semibold leading-none tabular-nums text-white">
                18/24
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-0 border-b border-slate-200 bg-white px-2 py-0 md:px-4">
        {[
          { label: "Accueil", active: false },
          { label: "Chambres", active: true },
          { label: "Invités", active: false },
          { label: "Menu & allergies", active: false },
        ].map(tab => (
          <div
            key={tab.label}
            className={`relative px-3 py-3 text-xs tracking-wide md:px-4 ${
              tab.active
                ? "font-medium text-primary"
                : "font-normal text-slate-500"
            }`}
          >
            {tab.label}
            {tab.active && (
              <span className="absolute inset-x-3 bottom-0 h-0.5 bg-indigo-400 md:inset-x-4" />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_0.9fr]">
        <div className="border-b border-slate-200 p-4 md:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                Hébergement
              </p>
              <h4 className="mt-1 font-sans text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-slate-900">
                Répartition des chambres
              </h4>
            </div>
            <span className="hidden items-center gap-1.5 border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] text-slate-500 sm:inline-flex">
              <BedDouble className="h-3.5 w-3.5" strokeWidth={1.25} />
              Attribution
            </span>
          </div>

          <div className="grid gap-0 border border-slate-200 sm:grid-cols-2">
            {rooms.map((room, i) => (
              <div
                key={room.name}
                className={`border-slate-200 bg-white p-4 text-left ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < 2 ? "border-b" : ""} ${i === 2 ? "border-b sm:border-b-0" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {room.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {room.capacity}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium ${
                      room.filled
                        ? room.tag === "Mariés"
                          ? "bg-emerald-50 text-emerald-800"
                          : "bg-amber-50 text-amber-800"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 bg-current" />
                    {room.tag}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {room.guests.length > 0 ? (
                    room.guests.map(g => (
                      <span
                        key={g}
                        className="inline-flex items-center border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-900"
                      >
                        {g}
                      </span>
                    ))
                  ) : (
                    <span className="text-[11px] text-slate-500">
                      En attente d&apos;attribution
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 text-left md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" strokeWidth={1.25} />
            <h4 className="text-base font-semibold tracking-[-0.01em] text-slate-900">
              Invités & RSVP
            </h4>
          </div>

          <div className="mb-5 border border-slate-200 bg-slate-50">
            <div className="flex h-1.5">
              <div className="w-[72%] bg-primary" />
              <div className="w-[14%] bg-amber-400" />
              <div className="w-[14%] bg-slate-200" />
            </div>
            <div className="flex justify-between px-3 py-2 text-[11px] text-slate-500">
              <span className="tabular-nums">128 convives confirmés</span>
              <span className="tabular-nums">24 en attente</span>
              <span className="tabular-nums">18 absents</span>
            </div>
          </div>

          <ul className="divide-y divide-slate-200 border border-slate-200">
            {guests.map(guest => (
              <li
                key={guest.name}
                className="flex min-h-[52px] items-center justify-between gap-3 bg-white px-3 py-2.5 hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm text-slate-900">{guest.name}</p>
                  {guest.allergy && (
                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#784B16]">
                      <UtensilsCrossed className="h-3 w-3" strokeWidth={1.25} />
                      {guest.allergy}
                    </p>
                  )}
                </div>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium ${
                    guest.status === "Oui"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-amber-50 text-amber-800"
                  }`}
                >
                  <span className="h-1.5 w-1.5 bg-current" />
                  {guest.status}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 border border-slate-200 bg-slate-100 px-3 py-3 text-center text-[12px] leading-relaxed text-slate-500">
            Le domaine reçoit automatiquement la fiche de route complète avant
            le week-end.
          </p>
        </div>
      </div>
    </div>
  )
}
