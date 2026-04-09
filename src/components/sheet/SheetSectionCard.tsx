import type { ReactNode } from 'react'

interface SheetSectionCardProps {
  title: string
  children: ReactNode
  accentClassName?: string
  headerAction?: ReactNode
}

export function SheetSectionCard({
  title,
  children,
  accentClassName = 'text-accent-gold',
  headerAction,
}: SheetSectionCardProps) {
  return (
    <section className="rounded-2xl border border-border/50 bg-bg-card/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className={`text-xs font-semibold uppercase tracking-wider ${accentClassName}`}>{title}</h3>
        {headerAction}
      </div>
      {children}
    </section>
  )
}
