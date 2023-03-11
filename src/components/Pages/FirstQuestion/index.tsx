import { useContext, useEffect, useRef, KeyboardEvent } from 'react'
import { pagesContext } from '../../../context/pagesContext'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { Container } from './styles'

interface FirstQuestionProps {
  age?: string,
  onAgeChange: (age: string) => void
}

export function FirstQuestion ({ age, onAgeChange }: FirstQuestionProps) {
  const { handlePageChange } = useContext(pagesContext)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  function handleKeypress (e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && age !== '') {
      handlePageChange(2)
    }
  };

  return (
    <Wrapper align='flex-start'>
      <Card
        height={300}
        width={600}
        mdHeight={300}
        mdWidth={600}
        marginTop={200}
        mdMarginTop={100}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerRightCorner'
      >
        <Container>
          <h1>How old are you ?</h1>
          <input
            ref={inputRef}
            type='text'
            value={age}
            onChange={({ target }) => onAgeChange(target.value.replace(/[^0-9]/g, ''))}
            onKeyDown={handleKeypress}/>
          <Button action={() => handlePageChange(2)} disabled={age === ''} />
        </Container>
      </Card>
    </Wrapper>
  )
}
