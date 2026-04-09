import { describe, expect, it } from 'vitest'
import { getBackgroundById } from '../data/backgrounds'
import {
  getBackgroundAbilityBonuses,
  isBackgroundAbilityChoicesValid,
  normalizeBackgroundAbilityChoices,
} from './background-ability-choices'

describe('background ability choices', () => {
  it('accepts legacy +2/+1 saved data and upgrades it', () => {
    expect(normalizeBackgroundAbilityChoices({ primary: 'WIS', secondary: 'CHA' })).toEqual({
      mode: 'plus2_plus1',
      primary: 'WIS',
      secondary: 'CHA',
    })
  })

  it('validates the 2024 +1/+1/+1 distribution against the background pool', () => {
    const background = getBackgroundById('acolyte')

    expect(
      isBackgroundAbilityChoicesValid(background, {
        mode: 'plus1_plus1_plus1',
        abilities: ['WIS', 'INT', 'CHA'],
      }),
    ).toBe(true)
  })

  it('rejects duplicate abilities for the +2/+1 distribution', () => {
    const background = getBackgroundById('guard')

    expect(
      isBackgroundAbilityChoicesValid(background, {
        mode: 'plus2_plus1',
        primary: 'STR',
        secondary: 'STR',
      }),
    ).toBe(false)
  })

  it('derives three +1 bonuses when that option is selected', () => {
    const background = getBackgroundById('acolyte')

    expect(
      getBackgroundAbilityBonuses(background, {
        mode: 'plus1_plus1_plus1',
        abilities: ['WIS', 'INT', 'CHA'],
      }),
    ).toEqual([
      { ability: 'WIS', value: 1 },
      { ability: 'INT', value: 1 },
      { ability: 'CHA', value: 1 },
    ])
  })
})
