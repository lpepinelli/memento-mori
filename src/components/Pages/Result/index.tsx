import { ReactElement, useEffect, useMemo, useState } from 'react'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { GoBook } from 'react-icons/go'
import { TiPlaneOutline } from 'react-icons/ti'
import { BsTranslate } from 'react-icons/bs'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { ContainerValue, ResultContainer, Title, ResultWrapper, Container } from './styles'
import { AnimatePresence } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { knownCountries, yearsToReach1M, diferenceBetweenDates, padTo2Digits } from '../../../utils/suggestionsHelper'

interface ResultProps {
  age: number,
  expectation: number
}

interface SuggestionsType {
  icon: ReactElement,
  description: string,
  explanation?: string
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
  const [suggestions, setSuggestions] = useState<SuggestionsType[]>([])
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
          description: knownCountries(years)
        },
        {
          icon: <BsTranslate />,
          description: `If you use 1 hour a day for learning a new language, you will have learned ${Math.ceil((1 * days) / 8000)} languages.`,
          explanation: 'Considering it takes 8,000 hours to learn a language'
        },
        {
          icon: <MdOutlineAttachMoney />,
          description: `If you save and invest $500 every month, you will reach a savings of 1M by the age of ${yearsToReach1M(age)} years`
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
                <ContainerValue width={350} mdWidth={225} height={70} mdHeight={50}>
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
                <ContainerValue width={200} mdWidth={150} height={70} mdHeight={50} bgColor='dark'><h2>{label}</h2></ContainerValue>
              </ResultWrapper>
            ))}
          </ResultContainer>
          <ResultContainer>
            {suggestions.map(({ icon, description, explanation }, i) => (
              <ResultWrapper key={i} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (0.7 * i) + 1.5, duration: 0.7 } }}>
                {explanation && (
                  <div className="questionTooltip" data-tooltip-content={explanation}>
                    <FaRegQuestionCircle size={12} />
                  </div>
                )}
                <ContainerValue width={90} mdWidth={60} height={105} mdHeight={70} ><h1>{icon}</h1></ContainerValue>
                <ContainerValue width={420} mdWidth={375} height={105} mdHeight={70} bgColor='dark'><p>{description}</p></ContainerValue>
              </ResultWrapper>
            ))}
            <Tooltip anchorSelect=".questionTooltip" />
          </ResultContainer>
        </Container>
      </Card>
    </Wrapper>
  )
}
