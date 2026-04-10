import { describe, expect, it } from 'vitest'
import { human } from '../data/races'
import {
  getSelectedSpeciesChoiceOption,
  hasRequiredSpeciesChoices,
  resolveSpeciesChoiceEffects,
} from './species-choice-selections'

describe('species choice selections', () => {
  it('requires all human 2024 species choices during creation', () => {
    expect(hasRequiredSpeciesChoices(human, [])).toBe(false)
    expect(hasRequiredSpeciesChoices(human, [
      { groupId: 'human-size', optionId: 'medium' },
      { groupId: 'human-skillful', optionId: 'perception' },
      { groupId: 'human-versatile', optionId: 'skilled' },
    ])).toBe(true)
  })

  it('resolves selected human options into real effects', () => {
    const effects = resolveSpeciesChoiceEffects({
      species: human,
      selections: [
        { groupId: 'human-size', optionId: 'small' },
        { groupId: 'human-skillful', optionId: 'stealth' },
        { groupId: 'human-versatile', optionId: 'alert' },
      ],
    })

    expect(effects.size).toBe('Small')
    expect(effects.sizeIT).toBe('Piccola')
    expect(effects.proficiencies).toEqual([
      { type: 'skill', value: 'stealth', valueIT: 'Furtivita' },
    ])
    expect(effects.featIds).toEqual(['alert'])
  })

  it('returns the chosen option for a species choice group', () => {
    const option = getSelectedSpeciesChoiceOption(
      human,
      [{ groupId: 'human-versatile', optionId: 'skilled' }],
      'human-versatile',
    )

    expect(option?.id).toBe('skilled')
    expect(option?.nameIT).toBe('Abile')
  })
})
