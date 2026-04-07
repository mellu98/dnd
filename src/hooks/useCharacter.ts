import { useMemo } from 'react'
import { useCharacterContext } from '../context/CharacterContext'
import { calculateAllStats } from '../engine/calculator'
import type { CalculatedStats } from '../types'

export function useCharacter() {
  const { state, dispatch } = useCharacterContext()

  const calculatedStats: CalculatedStats | null = useMemo(() => {
    if (!state.character) return null
    return calculateAllStats(state.character)
  }, [state.character])

  return { state, dispatch, calculatedStats }
}
