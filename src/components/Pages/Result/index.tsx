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
import { useTranslation } from 'react-i18next'

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
  const { i18n } = useTranslation()
  const isMobile = window.innerWidth <= 612

  useEffect(() => {
    const interval = setInterval(() => {
      setDiffTime(prevDiff => prevDiff - 1000)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const results = [
    {
      label: i18n.language === 'en-US' ? 'Hours' : 'Horas',
      value: `${hours.toLocaleString(i18n.language)}-${padTo2Digits(minutes % 60)}-${padTo2Digits(seconds % 60)}`
    },
    {
      label: i18n.language === 'en-US' ? 'Days' : 'Dias',
      value: days.toLocaleString(i18n.language)
    },
    {
      label: i18n.language === 'en-US' ? 'Weeks' : 'Semanas',
      value: weeks.toLocaleString(i18n.language)
    },
    {
      label: i18n.language === 'en-US' ? 'Months' : 'Meses',
      value: months.toLocaleString(i18n.language)
    },
    {
      label: i18n.language === 'en-US' ? 'Years' : 'Anos',
      value: years.toLocaleString(i18n.language)
    },
    {
      label: i18n.language === 'en-US' ? 'Decades' : 'Décadas',
      value: decades.toLocaleString(i18n.language)
    }
  ]

  useEffect(() => {
    const timeoutSuggestAnimationId = setTimeout(() => {
      setStartAnimation(true)
    }, 6000)
    const timeoutSuggestArrayId = setTimeout(() => {
      const { payment, yearsToReach } = yearsToReach1M(age, expectation)
      const suggestionsArray = [
        {
          icon: <GoBook />,
          description: i18n.language === 'en-US' ? `If you read 1 book every 2 months, you will have read ${months / 2} books.` : `Se você ler 1 livro a cada 2 meses, terá lido ${months / 2} livros.`
        },
        {
          icon: <TiPlaneOutline />,
          description: knownCountries(years, i18n.language)
        },
        {
          icon: <BsTranslate />,
          description: i18n.language === 'en-US' ? `If you use 1 hour a day for learning a new language, you will have learned ${Math.ceil((1 * days) / 8000)} languages.` : `Se você usar 1 hora por dia para aprender um novo idioma, terá aprendido ${Math.ceil((1 * days) / 8000)} idiomas.`,
          explanation: i18n.language === 'en-US' ? 'Considering it takes 8,000 hours to learn a language' : 'Considerando que leva 8.000 horas para aprender um idioma'
        }
      ]

      if (payment > 0) {
        suggestionsArray.push(
          {
            icon: <MdOutlineAttachMoney />,
            description: i18n.language === 'en-US' ? `If you save and invest $${payment.toLocaleString('pt-BR')} every month, you will become a millionaire by the age of ${yearsToReach + age} years.` : `Se você economizar e investir R$ ${payment.toLocaleString(i18n.language)} todos os meses, ficará milionário aos ${yearsToReach + age} anos.`,
            explanation: i18n.language === 'en-US' ? 'Approximate values based on compound interest formula with an annual rate of 8%' : 'Valores aproximados com base na fórmula de juros compostos com taxa anual de 8%'
          }
        )
      }
      setSuggestions(suggestionsArray)
    }, 6500)
    return () => {
      clearTimeout(timeoutSuggestAnimationId)
      clearTimeout(timeoutSuggestArrayId)
    }
  }, [])

  return (
    <Wrapper align={isMobile ? 'center' : 'flex-start'}>
      <Card
        height={650}
        width={1150}
        mdHeight={440}
        mdWidth={900}
        smHeight={500}
        smWidth={340}
        marginTop={300}
        mdMarginTop={200}
        smMarginTop={60}
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
                { i18n.language === 'en-US' ? 'You have:' : 'Você tem:'}
            </Title>
          : <Title
              key="secondTitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              exit={{ opacity: 0 }}>
              { i18n.language === 'en-US' ? 'With this time you can:' : 'Com esse tempo você pode:'}
            </Title>
            }
        </AnimatePresence>
        <Container
          style={{ marginLeft: !startAnimation && !isMobile ? undefined : 10 }}
          justifyContent={!startAnimation ? 'center' : 'flex-start'}
          transition={{ type: 'tween', duration: 2 }}>
          <ResultContainer layout transition={{ duration: 1.5 }}>
            {results.map(({ label, value }, i) => (
              <ResultWrapper key={label} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: (0.7 * i) + 1.5, duration: 0.7 } }}>
                <ContainerValue width={350} mdWidth={225} smWidth={165} height={70} mdHeight={50} smHeight={50}>
                  {label === 'Hours' || label === 'Horas'
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
                <ContainerValue width={200} mdWidth={150} smWidth={120} height={70} mdHeight={50} smHeight={50} bgColor='dark'><h2>{label}</h2></ContainerValue>
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
                <ContainerValue width={90} mdWidth={60} smWidth={65} height={105} mdHeight={70} smHeight={70} ><h1>{icon}</h1></ContainerValue>
                <ContainerValue width={420} mdWidth={375} smWidth={220} height={105} mdHeight={70} smHeight={70} bgColor='dark'><p>{description}</p></ContainerValue>
              </ResultWrapper>
            ))}
            <Tooltip anchorSelect=".questionTooltip" />
          </ResultContainer>
        </Container>
      </Card>
    </Wrapper>
  )
}
