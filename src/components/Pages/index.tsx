import { useContext, useState } from 'react'
import { pagesContext } from '../../context/pagesContext'
import { FirstQuestion } from './FirstQuestion'
import { SecondQuestion } from './SecondQuestion'
import { Home } from './Home'
import { AnimatePresence } from 'framer-motion'
import Loading from './Loading'
import Result from './Result'
import ErrorPhrase from './ErrorPhrase'
import WarningPhrase from './WarningPhrase'

export default function Pages () {
  const [age, setAge] = useState('')
  const [expectation, setExpectation] = useState('')
  const { currentPage } = useContext(pagesContext)

  function handleAgeChange (age: string) {
    setAge(age)
  }

  function handleExpectationChange (expectation: string) {
    setExpectation(expectation)
  }

  const pages = [
    <Home key={1} />,
    <FirstQuestion key={2} age={age} onAgeChange={handleAgeChange} />,
    <SecondQuestion key={3} age={age} expectation={expectation} onExpectationChange={handleExpectationChange} />,
    <Loading key={4} expectation={Number(expectation)} />,
    <ErrorPhrase key={5} />,
    <WarningPhrase key={6} />,
    <Result key={7} age={Number(age)} expectation={Number(expectation)} />
  ]

  return (
    <AnimatePresence mode='wait'>
      {pages[currentPage]}
    </AnimatePresence>
  )
}
