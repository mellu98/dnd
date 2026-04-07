import type { Background } from '../../types'
import { backgrounds } from './backgrounds'

export { backgrounds }

export function getBackgroundById(id: string): Background | undefined {
  return backgrounds.find((bg) => bg.id === id)
}
