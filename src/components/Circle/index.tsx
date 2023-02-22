import { useContext, useEffect, useState } from 'react'
import { pagesContext } from '../../context/pagesContext'
import { CircleContainer } from './styles'

interface CircleProps {
  onToggleTheme: () => void
}

export function Circle ({ onToggleTheme }: CircleProps) {
  const { currentPage } = useContext(pagesContext)
  const [loading, setLoading] = useState(false)
  const upperLeftCorner = -(window.innerWidth - 240)
  const lowerLeftCorner = (window.innerHeight - 230)
  const centerY = (window.innerHeight / 2) - 114
  const centerX = (window.innerWidth / 2) - 114

  useEffect(() => {
    let timeoutId = 0
    if (currentPage === 3) {
      timeoutId = setTimeout(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, 2000)
    }

    return () => {
      if (timeoutId !== 0) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentPage])

  const variants = {
    0: { opacity: [0, 1] },
    1: {
      x: [0, upperLeftCorner],
      y: [0, -100, 0],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    2: {
      y: [null, lowerLeftCorner],
      x: [upperLeftCorner, upperLeftCorner - 100, upperLeftCorner],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    3: {
      x: [null, -centerX],
      y: [null, centerY],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    loading: {
      x: [-centerX],
      y: [centerY],
      opacity: 1,
      scale: [1, 1.2, 1],
      transition: { repeat: Infinity }
    },
    4: {
      x: [null, -centerX],
      y: [null, 0],
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <>
      <CircleContainer
        whileHover={loading ? {} : { scale: 1.08 }}
        onClick={onToggleTheme}
        variants={variants}
        animate={loading ? 'loading' : String(currentPage)}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    </>
  )
}
