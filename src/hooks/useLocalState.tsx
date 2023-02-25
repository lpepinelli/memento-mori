import { useEffect, useState } from 'react'

export default function useLocalState<T> (key: string, initialValue = '') {
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
