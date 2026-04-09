import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import App from '../../App'
import { saveStorage } from '../../utils/storage'
import type { Character } from '../../types'
import { it as translations } from '../../i18n/it'

function makeCharacter(overrides: Partial<Character>): Character {
  return {
    id: 'test-character',
    name: 'Test Hero',
    raceId: 'human',
    classId: 'wizard',
    subclassId: null,
    backgroundId: 'acolyte',
    backgroundAbilityChoices: { primary: 'INT', secondary: 'WIS' },
    level: 5,
    abilityScores: { STR: 10, DEX: 14, CON: 12, INT: 16, WIS: 13, CHA: 10 },
    hp: { max: 24, current: 18, temporary: 0 },
    skillProficiencies: ['arcana', 'history'],
    chosenLanguages: [],
    alignment: '',
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    equipment: [],
    equippedArmorId: null,
    equippedShieldId: null,
    knownSpells: [],
    preparedSpells: [],
    expendedSpellSlots: { 1: 1 },
    asiChoices: [],
    deathSaves: { successes: 0, failures: 0 },
    activeConditions: ['poisoned'],
    exhaustionLevel: 1,
    inspiration: true,
    isStabilized: false,
    spentHitDice: 1,
    expertiseSkills: [],
    currency: { cp: 0, sp: 0, ep: 0, gp: 15, pp: 0 },
    initiativeTracker: [],
    activeInitiativeId: null,
    notes: '',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    imageUrl: null,
    ...overrides,
  }
}

describe('CharacterSheet navigation shell', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    localStorage.clear()

    const merlin = makeCharacter({ id: 'wizard-1', name: 'Merlin', classId: 'wizard' })
    const brakka = makeCharacter({
      id: 'fighter-1',
      name: 'Brakka',
      classId: 'fighter',
      backgroundId: 'guard',
      backgroundAbilityChoices: null,
      level: 4,
      activeConditions: [],
      exhaustionLevel: 0,
      inspiration: false,
    })

    saveStorage({
      version: 9,
      characters: [merlin, brakka],
      activeCharacterId: merlin.id,
    })
  })

  afterEach(() => {
    cleanup()
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
    localStorage.clear()
  })

  it('opens on overview and renders both desktop and mobile navigation shells', () => {
    render(<App />)

    expect(screen.getByTestId('sheet-desktop-tabs')).toBeInTheDocument()
    expect(screen.getByTestId('sheet-bottom-nav')).toBeInTheDocument()

    const outlet = screen.getByTestId('sheet-section-outlet')
    expect(within(outlet).getByRole('heading', { name: /panoramica/i })).toBeInTheDocument()
    expect(within(outlet).getByText(translations.overview_resources)).toBeInTheDocument()
  })

  it('switches section content when a nav item is selected', () => {
    render(<App />)

    const bottomNav = screen.getByTestId('sheet-bottom-nav')
    fireEvent.click(within(bottomNav).getByRole('button', { name: /magia/i }))

    const outlet = screen.getByTestId('sheet-section-outlet')
    expect(within(outlet).getByRole('heading', { name: /magia/i })).toBeInTheDocument()
    expect(within(outlet).getByText(translations.spell_attack_bonus)).toBeInTheDocument()
    expect(within(outlet).getByText(translations.spell_save_dc)).toBeInTheDocument()
  })

  it('resets the active section to overview after quick switching characters', () => {
    render(<App />)

    const desktopTabs = screen.getByTestId('sheet-desktop-tabs')
    fireEvent.click(within(desktopTabs).getByRole('button', { name: /sessione/i }))

    let outlet = screen.getByTestId('sheet-section-outlet')
    expect(within(outlet).getByRole('heading', { name: /sessione/i })).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText(translations.quick_switch_label), {
      target: { value: 'fighter-1' },
    })

    outlet = screen.getByTestId('sheet-section-outlet')
    expect(within(outlet).getByRole('heading', { name: /panoramica/i })).toBeInTheDocument()
    expect(screen.getByDisplayValue('Brakka')).toBeInTheDocument()
  })
})
