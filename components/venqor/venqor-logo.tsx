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
  /** Version claire pour fonds sombres */
  inverted?: boolean
}

export function VenqorLogo({
  className,
  size = "navbar",
  inverted = false,
}: VenqorLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display font-semibold tracking-[-0.03em] leading-none",
        sizeClasses[size],
        className,
      )}
      aria-label="Venqor"
    >
      <span className={inverted ? "text-white" : "text-ink"}>Ven</span>
      <span className={inverted ? "text-indigo-300" : "text-primary"}>qor.</span>
    </span>
  )
}
