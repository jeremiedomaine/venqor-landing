import { cn } from "@/lib/utils"

const sizeClasses = {
  navbar: "text-2xl",
  md: "text-xl",
  sm: "text-lg",
} as const

export type VenqorLogoSize = keyof typeof sizeClasses

type VenqorLogoProps = {
  className?: string
  /** Navbar : text-2xl (défaut) */
  size?: VenqorLogoSize
}

/**
 * Logo typographique MVB : Ven (slate-900) + qor. (primary), sans espace.
 */
export function VenqorLogo({ className, size = "navbar" }: VenqorLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-black tracking-tight leading-none",
        sizeClasses[size],
        className,
      )}
      aria-label="Venqor"
    >
      <span className="text-slate-900">Ven</span>
      <span className="text-primary">qor.</span>
    </span>
  )
}
