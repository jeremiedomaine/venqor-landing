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
    <section
      id={id}
      className={cn("relative px-6 py-16 md:px-8 md:py-24", className)}
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-12 md:mb-16",
            centered && "mx-auto max-w-2xl text-center",
          )}
        >
          {eyebrow && (
            <p className={cn("eyebrow mb-5", dark && "!text-indigo-300")}>
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight md:text-4xl",
              dark ? "text-white" : "text-slate-900",
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-5 text-base leading-relaxed",
                dark ? "text-slate-300" : "text-slate-500",
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
