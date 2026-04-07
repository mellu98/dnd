import { useState, useEffect, useRef } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

export default function CharacterDetails() {
  const { state, dispatch } = useCharacterContext()
  const draft = state.creationDraft

  const [name, setName] = useState(draft.name || '')
  const [alignment, setAlignment] = useState(draft.alignment || '')
  const [personalityTraits, setPersonalityTraits] = useState(draft.personalityTraits || '')
  const [ideals, setIdeals] = useState(draft.ideals || '')
  const [bonds, setBonds] = useState(draft.bonds || '')
  const [flaws, setFlaws] = useState(draft.flaws || '')

  const formRef = useRef({ name, alignment, personalityTraits, ideals, bonds, flaws })
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    formRef.current = { name, alignment, personalityTraits, ideals, bonds, flaws }
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      dispatch({ type: 'SET_DETAILS', ...formRef.current })
    }, 500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [name, alignment, personalityTraits, ideals, bonds, flaws, dispatch])

  const inputClass = 'w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 transition-colors'
  const textareaClass = `${inputClass} resize-none`

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-4">{it.step_details}</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.char_name}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Es. Aragorn, Gandalf..."
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.alignment}</label>
          <select
            value={alignment}
            onChange={e => setAlignment(e.target.value)}
            className={inputClass}
          >
            <option value="">Seleziona...</option>
            <option value="LG">Legale Buono</option>
            <option value="NG">Neutrale Buono</option>
            <option value="CG">Caotico Buono</option>
            <option value="LN">Legale Neutrale</option>
            <option value="TN">Neutrale Puro</option>
            <option value="CN">Caotico Neutrale</option>
            <option value="LE">Legale Malvagio</option>
            <option value="NE">Neutrale Malvagio</option>
            <option value="CE">Caotico Malvagio</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.personality_traits}</label>
          <textarea
            value={personalityTraits}
            onChange={e => setPersonalityTraits(e.target.value)}
            rows={2}
            placeholder="Descrivi i tratti della personalita..."
            className={textareaClass}
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.ideals}</label>
          <textarea
            value={ideals}
            onChange={e => setIdeals(e.target.value)}
            rows={2}
            placeholder="I tuoi ideali..."
            className={textareaClass}
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.bonds}</label>
          <textarea
            value={bonds}
            onChange={e => setBonds(e.target.value)}
            rows={2}
            placeholder="I tuoi legami..."
            className={textareaClass}
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{it.flaws}</label>
          <textarea
            value={flaws}
            onChange={e => setFlaws(e.target.value)}
            rows={2}
            placeholder="I tuoi difetti..."
            className={textareaClass}
          />
        </div>
      </div>
    </div>
  )
}
