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
  mobile = false,
}: {
  item: SheetSectionItem
  isActive: boolean
  onClick: () => void
  mobile?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`group flex items-center transition-all ${
        mobile
          ? 'flex-1 flex-col justify-center gap-1 rounded-2xl px-2 py-2.5 text-[11px] font-semibold'
          : 'gap-2 rounded-full px-4 py-2 text-sm font-semibold'
      } ${
        isActive
          ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30 shadow-sm shadow-accent-gold/10'
          : 'text-text-secondary border border-transparent hover:border-border/60 hover:bg-bg-card/50 hover:text-text-primary'
      }`}
    >
      <span className={`${mobile ? 'text-base' : 'text-sm'} leading-none`} aria-hidden="true">
        {item.icon}
      </span>
      <span>{item.label}</span>
    </button>
  )
}

export function SheetNavigation({ sections, activeSection, onChange }: SheetNavigationProps) {
  return (
    <>
      <nav
        data-testid="sheet-desktop-tabs"
        aria-label="Navigazione scheda desktop"
        className="hidden md:flex items-center gap-2 flex-wrap"
      >
        {sections.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={item.id === activeSection}
            onClick={() => onChange(item.id)}
          />
        ))}
      </nav>

      <nav
        data-testid="sheet-bottom-nav"
        aria-label="Navigazione scheda mobile"
        className="fixed bottom-0 inset-x-0 z-40 border-t border-border/80 bg-bg-secondary/95 backdrop-blur-xl px-3 py-2 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-stretch gap-2">
          {sections.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={item.id === activeSection}
              onClick={() => onChange(item.id)}
              mobile
            />
          ))}
        </div>
      </nav>
    </>
  )
}
