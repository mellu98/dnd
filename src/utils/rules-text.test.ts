import { describe, expect, it } from 'vitest'
import { feetToMeters } from './units'
import { toMetricRuleText } from './rules-text'

describe('feetToMeters', () => {
  it('formats metric distances with Italian decimal commas', () => {
    expect(feetToMeters(35)).toBe('10,5 m')
    expect(feetToMeters(30)).toBe('9 m')
  })
})

describe('toMetricRuleText', () => {
  it('converts feet references in Italian text to metric values', () => {
    expect(
      toMetricRuleText('La tua velocità aumenta di 10 piedi. Quando ti muovi di 30 piedi, ignori il terreno difficile.'),
    ).toBe('La tua velocità aumenta di 3 m. Quando ti muovi di 9 m, ignori il terreno difficile.')
  })

  it('removes redundant feet values when metric text already exists', () => {
    expect(
      toMetricRuleText('La tua scurovisione ha un raggio di 36 metri (120 piedi) invece di 18 metri (60 piedi).'),
    ).toBe('La tua scurovisione ha un raggio di 36 metri invece di 18 metri.')
  })
})
