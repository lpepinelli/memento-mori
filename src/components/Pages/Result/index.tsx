import { ReactElement, useEffect, useMemo, useState } from 'react'
import { diferenceBetweenDates, padTo2Digits } from '../../../utils/date'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { GoBook } from 'react-icons/go'
import { TiPlaneOutline } from 'react-icons/ti'
import { BsTranslate } from 'react-icons/bs'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { ContainerValue, ResultContainer, Title, ResultWrapper, Container } from './styles'
import { AnimatePresence } from 'framer-motion'

interface ResultProps {
  age: number,
  expectation: number
}

export default function Result ({ age, expectation }: ResultProps) {
  const [diffTime, setDiffTime] = useState(diferenceBetweenDates(expectation - age))
  const decades = useMemo(() => (expectation - age) / 10, [age, expectation])
  const years = useMemo(() => (expectation - age), [age, expectation])
  const months = useMemo(() => (years * 12), [years])
  const weeks = useMemo(() => Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7)), [diffTime])
  const days = useMemo(() => Math.ceil(diffTime / (1000 * 60 * 60 * 24)), [diffTime])
  const seconds = useMemo(() => Math.floor(diffTime / 1000), [diffTime])
  const minutes = useMemo(() => Math.floor(seconds / 60), [seconds])
  const hours = useMemo(() => Math.floor(minutes / 60), [minutes])
  const [suggestions, setSuggestions] = useState<Array<{ icon: ReactElement, description: string }>>([])
  const [startAnimation, setStartAnimation] = useState(false)
  // const [title, setTitle] = useState('You have:')
  // const [seconds, setSeconds] = useState(hours * 60 * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setDiffTime(prevDiff => prevDiff - 1000)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const results = [
    {
      label: 'Hours',
      value: `${hours.toLocaleString('pt-BR')}-${padTo2Digits(minutes % 60)}-${padTo2Digits(seconds % 60)}`
    },
    {
      label: 'Days',
      value: days.toLocaleString('pt-BR') // 'en-US'
    },
    {
      label: 'Weeks',
      value: weeks.toLocaleString('pt-BR') // 'en-US'
    },
    {
      label: 'Months',
      value: months.toLocaleString('pt-BR') // 'en-US'
    },
    {
      label: 'Years',
      value: years.toLocaleString('pt-BR') // 'en-US'
    },
    {
      label: 'Decades',
      value: decades.toLocaleString('pt-BR') // 'en-US'
    }
  ]

  useEffect(() => {
    const timeouSuggestAnimationId = setTimeout(() => {
      setStartAnimation(true)
    }, 6000)
    const timeouSuggestArrayId = setTimeout(() => {
      setSuggestions([
        {
          icon: <GoBook />,
          description: `If you read 1 book every 2 months, you will have read ${months / 2} books.`
        },
        {
          icon: <TiPlaneOutline />,
          description: `If you visit 2 countries a year, you will have known ${years} countries.`
        },
        {
          icon: <BsTranslate />,
          description: `If you learn 1 language every 8.000 hours, you will have learned ${Math.ceil(hours / 8000)} languages.`
        },
        {
          icon: <MdOutlineAttachMoney />,
          description: `If you save and invest $500 every month you will reach 1M by the age of ${age + 34} years`
        }
      ])
    }, 6500)
    return () => {
      clearTimeout(timeouSuggestAnimationId)
      clearTimeout(timeouSuggestArrayId)
    }
  }, [])

  return (
    <Wrapper align='flex-start'>
      <Card
        height={650}
        width={1150}
        mdHeight={440}
        mdWidth={900}
        marginTop={300}
        mdMarginTop={200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerCentered'
      >
      <AnimatePresence mode='wait'>
        {!startAnimation
          ? <Title
              key="firstTitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}>
                You have:
            </Title>
          : <Title
              key="secondTitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              exit={{ opacity: 0 }}>
              With this time you can:
            </Title>
            }
        </AnimatePresence>
        <Container
          style={{ marginLeft: !startAnimation ? undefined : 10 }}
          justifyContent={!startAnimation ? 'center' : 'flex-start'}
          transition={{ type: 'tween', duration: 2 }}>
          <ResultContainer layout transition={{ duration: 1.5 }}>
            {results.map(({ label, value }, i) => (
              <ResultWrapper key={label} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (0.7 * i) + 1.5, duration: 0.7 } }}>
                <ContainerValue width={250} mdWidth={225} height={60} mdHeight={50}>
                  {label === 'Hours'
                    ? (
                        <h2>{value.split('-')[0]}
                          <span>:{value.split('-')[1]}</span>
                          <small>:{value.split('-')[2]}</small>
                        </h2>
                      )
                    : (
                        <h2>{value}</h2>
                      )
                  }

                </ContainerValue>
                <ContainerValue width={150} mdWidth={150} height={60} mdHeight={50} bgColor='dark'><h2>{label}</h2></ContainerValue>
              </ResultWrapper>
            ))}
          </ResultContainer>
          <ResultContainer>
            {suggestions.map(({ icon, description }, i) => (
              <ResultWrapper key={i} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (0.7 * i) + 1.5, duration: 0.7 } }}>
                <ContainerValue width={60} mdWidth={60} height={70} mdHeight={70} ><h1>{icon}</h1></ContainerValue>
                <ContainerValue width={400} mdWidth={375} height={70} mdHeight={70} bgColor='dark'><p>{description}</p></ContainerValue>
              </ResultWrapper>
            ))}
          </ResultContainer>
        </Container>
      </Card>
    </Wrapper>
  )
}
