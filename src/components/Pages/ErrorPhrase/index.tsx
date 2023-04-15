import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePagesContext } from '../../../context/usePagesContext'
import { Wrapper } from '../../Wrapper'
import { Title } from './styles'
import { Translator } from '../../i18n'

export default function ErrorPhrase () {
  const { handlePageChange } = usePagesContext()
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const timeoutTitleIndex1Id = setTimeout(() => {
      setTitleIndex(1)
    }, 3000)
    const timeoutTitleIndex2Id = setTimeout(() => {
      setTitleIndex(2)
    }, 9000)
    const timeoutChangeScreenId = setTimeout(() => {
      handlePageChange(2)
    }, 10000)

    return () => {
      if (timeoutTitleIndex1Id !== 0 && timeoutTitleIndex2Id !== 0 && timeoutChangeScreenId !== 0) {
        clearTimeout(timeoutTitleIndex1Id)
        clearTimeout(timeoutTitleIndex2Id)
        clearTimeout(timeoutChangeScreenId)
      }
    }
  }, [])

  const titles = [
    <Title
      key={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}>
        {Translator({ path: 'error.first' })}
      </Title>,
      <Title
        key={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}>
          {Translator({ path: 'error.second' })}
      </Title>,
      null
  ]

  return (
    <Wrapper>
      <AnimatePresence mode='wait'>
        {titles[titleIndex]}
      </AnimatePresence>
    </Wrapper>
  )
}
