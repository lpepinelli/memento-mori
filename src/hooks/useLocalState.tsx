import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export default function useLocalState<T> (key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storedData = localStorage.getItem(key)

    if (storedData) {
      return JSON.parse(storedData)
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
