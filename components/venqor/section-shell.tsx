import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  centered = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative px-4 py-24 md:py-28", className)}
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-12 md:mb-14",
            centered && "mx-auto max-w-2xl text-center",
          )}
        >
          {eyebrow && (
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-600 md:text-base">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
