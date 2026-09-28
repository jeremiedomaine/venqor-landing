import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  centered?: boolean
  dark?: boolean
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  centered = true,
  dark = false,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative px-4 py-24 md:py-32", className)}>
      <div className="relative mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-14 md:mb-16",
            centered && "mx-auto max-w-3xl text-center",
          )}
        >
          {eyebrow && (
            <p
              className={cn(
                "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
                dark ? "text-indigo-300" : "text-primary",
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "text-balance font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl lg:text-[2.75rem]",
              dark ? "text-white" : "text-ink",
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-5 text-[0.95rem] leading-relaxed md:text-base",
                dark ? "text-white/60" : "text-ink-soft",
              )}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
