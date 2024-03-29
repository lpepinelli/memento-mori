import { useContext, useEffect, useState } from 'react'
import { pagesContext } from '../../context/pagesContext'
import { CircleContainer } from './styles'

interface CircleProps {
  onToggleTheme: () => void
}

export function Circle ({ onToggleTheme }: CircleProps) {
  const { currentPage } = useContext(pagesContext)
  const [loading, setLoading] = useState(false)
  const isMobile = window.innerWidth <= 612
  const upperLeftCorner = isMobile ? -(window.innerWidth - 90) : -(window.innerWidth - 240)
  const lowerLeftCorner = (window.innerHeight - 230)
  const centerY = (window.innerHeight / 2) - 114
  const centerX = isMobile ? (window.innerWidth / 2) - 48 : (window.innerWidth / 2) - 114

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
    1: { // # FirstQuestion
      x: [0, upperLeftCorner],
      y: [0, -100, 0],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    2: { // # SecondQuestion
      x: [upperLeftCorner, upperLeftCorner - 130, upperLeftCorner],
      y: [0, lowerLeftCorner],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    3: { // # LoadingPage
      x: [null as any, -centerX],
      y: [null as any, centerY],
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
    4: { // # ErrorPhrase
      x: [-centerX, upperLeftCorner],
      y: [centerY, 0],
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    5: { // # WarningPhrase
      x: [-centerX, -centerX],
      y: [centerY, centerY + 200],
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    6: { // # Result
      x: [-centerX, -centerX],
      y: [null as any, 0],
      opacity: 1,
      transition: {
        duration: 1.2
      }
    }
  }

  return (
    <>
      <CircleContainer
        aria-label="Sun Theme Switcher"
        whileHover={loading ? {} : { scale: 1.08 }}
        onClick={onToggleTheme}
        variants={variants}
        animate={loading ? 'loading' : String(currentPage)}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    </>
  )
}
