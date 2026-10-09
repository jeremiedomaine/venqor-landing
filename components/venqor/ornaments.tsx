import { cn } from "@/lib/utils"

export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4", className)}
      aria-hidden
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30 md:w-20" />
      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30 md:w-20" />
    </div>
  )
}
