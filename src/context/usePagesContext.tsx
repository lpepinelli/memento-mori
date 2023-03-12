import { useContext } from 'react'
import { pagesContext } from './pagesContext'

export function usePagesContext () {
  return useContext(pagesContext)
}
