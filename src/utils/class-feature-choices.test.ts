import { describe, expect, it } from 'vitest'
import { getClassById } from '../data/classes'
import {
  getClassFeatureChoiceGroups,
  getSelectedClassFeatureChoiceOption,
  hasRequiredClassFeatureChoices,
  resolveClassFeatureChoiceEffects,
  upsertClassFeatureChoice,
} from './class-feature-choices'

describe('class-feature-choices', () => {
  it('exposes Divine Order as a level 1 cleric choice', () => {
    const cleric = getClassById('cleric')
    const groups = getClassFeatureChoiceGroups(cleric, 1)

    expect(groups).toHaveLength(1)
    expect(groups[0].id).toBe('divine-order')
  })

  it('resolves the Protector option proficiencies', () => {
    const cleric = getClassById('cleric')
    const effects = resolveClassFeatureChoiceEffects({
      classDefinition: cleric,
      selections: [{ groupId: 'divine-order', optionId: 'protector' }],
      level: 1,
    })

    expect(effects.proficiencies.some((proficiency) => proficiency.value === 'Heavy Armor')).toBe(true)
    expect(effects.proficiencies.some((proficiency) => proficiency.value === 'Martial Weapons')).toBe(true)
  })

  it('tracks required selections and preserves one option per group', () => {
    const cleric = getClassById('cleric')
    const updated = upsertClassFeatureChoice([], { groupId: 'divine-order', optionId: 'protector' })
    const replaced = upsertClassFeatureChoice(updated, { groupId: 'divine-order', optionId: 'thaumaturge' })

    expect(hasRequiredClassFeatureChoices(cleric, [], 1)).toBe(false)
    expect(hasRequiredClassFeatureChoices(cleric, replaced, 1)).toBe(true)
    expect(getSelectedClassFeatureChoiceOption(cleric, replaced, 'divine-order')?.id).toBe('thaumaturge')
    expect(replaced).toHaveLength(1)
  })
})
