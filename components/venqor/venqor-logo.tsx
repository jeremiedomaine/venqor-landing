import { cn } from "@/lib/utils"

const sizeClasses = {
  hero: "text-5xl md:text-6xl lg:text-7xl",
  navbar: "text-2xl",
  md: "text-xl",
  sm: "text-lg",
} as const

export type VenqorLogoSize = keyof typeof sizeClasses

type VenqorLogoProps = {
  className?: string
  size?: VenqorLogoSize
  inverted?: boolean
}

/** Logo typographique Venqor — une seule ligne, Inter Black */
export function VenqorLogo({
  className,
  size = "navbar",
  inverted = false,
}: VenqorLogoProps) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap font-black tracking-tight leading-none",
        sizeClasses[size],
        inverted ? "text-white" : "text-slate-900",
        className,
      )}
    >
      Venqor
    </span>
  )
}
