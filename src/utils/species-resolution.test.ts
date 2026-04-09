import { describe, expect, it } from 'vitest'
import { getRaceById } from '../data/races'
import { getSpeciesVariant, resolveSpecies } from './species-resolution'

describe('species-resolution', () => {
  it('resolves a dragonborn topaz variant with necrotic mechanics', () => {
    const species = getRaceById('dragonborn')
    const variant = getSpeciesVariant(species, 'topaz')
    const resolved = resolveSpecies(species, 'topaz')

    expect(variant?.mechanics?.damageTypeIT).toBe('Necrotico')
    expect(variant?.mechanics?.resistanceTypeIT).toBe('Necrotico')
    expect(resolved?.features.some((feature) => feature.name === 'Topaz Resistance')).toBe(true)
  })

  it('falls back to the base species when no variant is selected', () => {
    const species = getRaceById('elf')
    const resolved = resolveSpecies(species, null)

    expect(resolved?.variant).toBeNull()
    expect(resolved?.darkvision).toBe(60)
    expect(resolved?.features.some((feature) => feature.name === 'Trance')).toBe(true)
  })
})
