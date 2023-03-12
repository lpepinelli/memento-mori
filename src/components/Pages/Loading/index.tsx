import { useContext, useEffect } from 'react'
import { pagesContext } from '../../../context/pagesContext'

interface LoadingProps {
  expectation: number
}

export default function Loading ({ expectation }: LoadingProps) {
  const { handlePageChange } = useContext(pagesContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (expectation < 85) {
        handlePageChange(4)
      } else if (expectation > 122) {
        handlePageChange(5)
      } else {
        handlePageChange(6)
      }
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
