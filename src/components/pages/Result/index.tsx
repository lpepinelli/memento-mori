import { useMemo, useState } from 'react'
import { diferenceBetweenDates } from '../../../utils/date'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'

interface ResultProps {
  age: number,
  expectation: number
}

export default function Result ({ age, expectation }: ResultProps) {
  const diffTime = useMemo(() => diferenceBetweenDates(expectation - age), [age, expectation])
  const decades = useMemo(() => (expectation - age) / 10, [age, expectation])
  const years = useMemo(() => (expectation - age), [age, expectation])
  const months = useMemo(() => (years * 12), [years])
  const weeks = useMemo(() => Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7)), [diffTime])
  const days = useMemo(() => Math.ceil(diffTime / (1000 * 60 * 60 * 24)), [diffTime])
  const hours = useMemo(() => Math.ceil(diffTime / (1000 * 60 * 60)), [diffTime])
  const [seconds, setSeconds] = useState(hours * 60 * 60)

  const results = [
    {
      label: 'Hours',
      value: hours
    },
    {
      label: 'Days',
      value: days
    },
    {
      label: 'Weeks',
      value: weeks
    },
    {
      label: 'Months',
      value: months
    },
    {
      label: 'Years',
      value: years
    },
    {
      label: 'Decades',
      value: decades
    }
  ]

  return (
    <Wrapper align='flex-start'>
      <Card
        height={650}
        width={1150}
        mdHeight={420}
        mdWidth={950}
        marginTop={300}
        mdMarginTop={220}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerCentered'
      >
        <h1>You have:</h1>
        {results.map(({ label, value }) => (
          <h1 key={label}>{`${label} - ${value}`}</h1>
        ))}
      </Card>
    </Wrapper>
  )
}
