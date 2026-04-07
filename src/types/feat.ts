import type { Sourced } from './common'

export interface Feat extends Sourced {
  id: string
  name: string
  nameIT: string
  description: string
  descriptionIT: string
  /** Short summary of the mechanical benefit */
  mechanicIT?: string
}
