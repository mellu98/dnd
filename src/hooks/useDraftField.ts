import { useState, useEffect } from 'react'
import type { Dispatch } from 'react'
import { useCharacterContext } from '../context/CharacterContext'

interface UseDraftFieldOptions<T> {
  key: string
  initial: T
  dispatch: Dispatch<{ type: string; [key: string]: unknown }>
  actionType: string
}

export function useDraftField<T = string>({ key, initial, dispatch, actionType }: UseDraftFieldOptions<T>) {
  const { state } = useCharacterContext()
  const draftValue = state.creationDraft[key as keyof typeof state.creationDraft]
  const [value, setValue] = useState<T>(draftValue !== undefined ? (draftValue as T) : initial)

  useEffect(() => {
    dispatch({ type: actionType, [key]: value })
  }, [key, value, actionType, dispatch])

  return [value, setValue] as const
}
