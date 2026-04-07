import type { ReactNode } from 'react'

interface Props {
  selected: boolean
  onClick: () => void
  title: string
  subtitle?: string
  badges?: ReactNode
  children?: ReactNode
  className?: string
}

export function SelectionCard({ selected, onClick, title, subtitle, badges, children, className = '' }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left p-4 rounded-xl border-2 transition-all duration-200
        ${selected
          ? 'border-accent-gold bg-bg-card shadow-lg shadow-accent-gold/10 ring-1 ring-accent-gold/20'
          : 'border-border bg-bg-card hover:border-border-light hover:bg-bg-card-hover hover:shadow-md'
        }
        animate-fade-in
        ${className}
      `}
    >
      <h3 className="font-semibold text-text-primary">{title}</h3>
      {subtitle && (
        <div className="flex gap-3 mt-2 text-xs text-text-secondary">
          <span>{subtitle}</span>
        </div>
      )}
      {badges && <div className="flex flex-wrap gap-1 mt-2">{badges}</div>}
      {children}
    </button>
  )
}
