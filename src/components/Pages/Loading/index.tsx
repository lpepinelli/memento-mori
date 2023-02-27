import { useContext, useEffect } from 'react'
import { pagesContext } from '../../../context/pagesContext'

export default function Loading () {
  const { handlePageChange } = useContext(pagesContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handlePageChange(4)
    }, 5000)

    return () => {
      if (timeoutId !== 0) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    null
  )
}
