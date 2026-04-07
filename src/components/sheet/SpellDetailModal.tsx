import type { Spell } from '../../types'
import { it } from '../../i18n/it'

interface SpellDetailModalProps {
  spell: Spell
  onClose: () => void
}

function ComponentPill({ label, fullLabel, active }: { label: string; fullLabel: string; active: boolean }) {
  if (!active) return null
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-xs font-semibold">
      <span className="font-black">{label}</span>
      <span className="text-accent-purple/70 font-normal">{fullLabel}</span>
    </span>
  )
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-base leading-none mt-0.5">{icon}</span>
      <div>
        <span className="text-[10px] text-text-muted uppercase tracking-wider block leading-none mb-0.5">{label}</span>
        <span className="text-sm text-text-primary">{value}</span>
      </div>
    </div>
  )
}

export function SpellDetailModal({ spell, onClose }: SpellDetailModalProps) {
  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal card */}
      <div
        className="relative w-full max-w-md bg-bg-secondary border border-border-light rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-bg-card/60 border-b border-border px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-text-primary leading-tight">{spell.nameIT}</h2>
              <p className="text-xs text-text-muted mt-0.5 italic">{spell.name}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 rounded-lg bg-bg-secondary text-text-secondary hover:text-accent-red hover:bg-accent-red/10 border border-border transition-all flex items-center justify-center text-lg leading-none"
            >
              &times;
            </button>
          </div>

          {/* Level + school badges */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {spell.level === 0 ? (
              <span className="px-2.5 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold border border-accent-gold/40">
                {it.spell_cantrip}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-bold border border-accent-blue/30">
                {spell.level === 1 ? it.spell_level_1 : spell.level === 2 ? it.spell_level_2 : it.spell_level_3}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full bg-bg-primary/60 text-text-secondary text-xs border border-border">
              {spell.schoolIT}
            </span>
            {spell.concentration && (
              <span className="px-2.5 py-1 rounded-full bg-accent-red/15 text-accent-red text-xs font-semibold border border-accent-red/30">
                ⚡ {it.concentration_label}
              </span>
            )}
            {spell.ritual && (
              <span className="px-2.5 py-1 rounded-full bg-accent-emerald/15 text-accent-emerald text-xs font-semibold border border-accent-emerald/30">
                ✦ {it.ritual_label}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Quick stats grid */}
          <div className="grid grid-cols-2 gap-3">
            <InfoRow icon="⏱" label="Tempo di Lancio" value={spell.castingTimeIT} />
            <InfoRow icon="🎯" label="Gittata" value={spell.rangeIT} />
            <InfoRow icon="⏳" label="Durata" value={spell.durationIT} />
          </div>

          {/* Components */}
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider mb-2">Componenti</p>
            <div className="flex flex-wrap gap-2">
              <ComponentPill label="V" fullLabel={it.component_verbal} active={spell.components.v} />
              <ComponentPill label="S" fullLabel={it.component_somatic} active={spell.components.s} />
              <ComponentPill label="M" fullLabel={it.component_material} active={!!spell.components.m} />
            </div>
            {spell.components.mIT && (
              <p className="text-xs text-text-secondary mt-2 italic px-1">({spell.components.mIT})</p>
            )}
          </div>

          {/* Description */}
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider mb-2">Descrizione</p>
            <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">{spell.descriptionIT}</p>
          </div>
        </div>

        {/* Footer close button */}
        <div className="border-t border-border px-5 py-3">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-bg-card border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-all font-medium"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  )
}
