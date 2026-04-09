import type { Feature, Proficiency, Species, SpeciesVariant } from '../types'

export interface ResolvedSpecies {
  species: Species
  variant: SpeciesVariant | null
  speed: number
  darkvision: number
  size: Species['size']
  sizeIT: string
  features: Feature[]
  proficiencies: Proficiency[]
  languages: string[]
  languagesIT: string[]
}

export function getSpeciesVariant(
  species?: Species | null,
  variantId?: string | null,
): SpeciesVariant | null {
  if (!species || !variantId) return null
  return species.variants?.find((variant) => variant.id === variantId) ?? null
}

export function resolveSpecies(
  species?: Species | null,
  variantId?: string | null,
): ResolvedSpecies | null {
  if (!species) return null

  const variant = getSpeciesVariant(species, variantId)

  return {
    species,
    variant,
    speed: variant?.speed ?? species.speed,
    darkvision: variant?.darkvision ?? species.darkvision,
    size: variant?.size ?? species.size,
    sizeIT: variant?.sizeIT ?? species.sizeIT,
    features: [...species.features, ...(variant?.features ?? [])],
    proficiencies: [...species.proficiencies, ...(variant?.proficiencies ?? [])],
    languages: [...species.languages, ...(variant?.languages ?? [])],
    languagesIT: [...species.languagesIT, ...(variant?.languagesIT ?? [])],
  }
}
