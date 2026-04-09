import type { ReactNode } from 'react'

export type SheetSection = 'overview' | 'sheet' | 'equipment' | 'spells' | 'session'

export interface SheetSectionItem {
  id: SheetSection
  label: string
  icon: ReactNode
}

interface SheetNavigationProps {
  sections: SheetSectionItem[]
  activeSection: SheetSection
  onChange: (section: SheetSection) => void
}

function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: SheetSectionItem
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`group flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 text-[11px] font-semibold transition-all md:flex-none md:min-w-[104px] ${
        isActive
          ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30 shadow-sm shadow-accent-gold/10'
          : 'text-text-secondary border border-transparent hover:border-border/60 hover:bg-bg-card/50 hover:text-text-primary'
      }`}
    >
      <span className="text-base leading-none md:text-sm" aria-hidden="true">
        {item.icon}
      </span>
      <span>{item.label}</span>
    </button>
  )
}

export function SheetNavigation({ sections, activeSection, onChange }: SheetNavigationProps) {
  return (
    <nav
      data-testid="sheet-bottom-nav"
      aria-label="Navigazione scheda"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border/80 bg-bg-secondary/95 backdrop-blur-xl px-3 py-2"
    >
      <div className="mx-auto flex max-w-7xl items-stretch gap-2 overflow-x-auto md:justify-center">
        {sections.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={item.id === activeSection}
            onClick={() => onChange(item.id)}
          />
        ))}
      </div>
    </nav>
  )
}
