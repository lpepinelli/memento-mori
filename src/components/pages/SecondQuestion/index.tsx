import { useContext } from 'react'
import { pagesContext } from '../../../context/pagesContext'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { Container } from './styles'

interface SecondQuestionProps {
  expectation?: string,
  onExpectationChange: (age: string) => void
}

export function SecondQuestion ({ expectation, onExpectationChange }: SecondQuestionProps) {
  const { handlePageChange } = useContext(pagesContext)
  return (
    <Wrapper align='flex-start'>
      <Card
        height={300}
        width={700}
        mdHeight={300}
        mdWidth={650}
        marginTop={200}
        mdMarginTop={100}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='upperRightCorner'
      >
        <Container>
          <h1>How long would you like to live ?</h1>
          <input type='text' value={expectation} onChange={({ target }) => onExpectationChange(target.value)}/>
          <Button action={() => handlePageChange(3)} disabled={expectation === ''} />
        </Container>
      </Card>
    </Wrapper>
  )
}
