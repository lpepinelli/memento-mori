import { useContext, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react'
import { pagesContext } from '../../../context/pagesContext'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { Container } from './styles'
import { Translator } from '../../i18n'

interface FirstQuestionProps {
  age?: string,
  onAgeChange: (age: string) => void
}

export function FirstQuestion ({ age, onAgeChange }: FirstQuestionProps) {
  const { handlePageChange } = useContext(pagesContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const isMobile = window.innerWidth <= 412

  useEffect(() => {
    if (!isMobile) {
      inputRef?.current?.focus()
    }
  }, [])

  function handleKeypress (e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && age !== '' && Number(age) <= 122) {
      handlePageChange(2)
    }
  }

  function handleAgeChange ({ target }: ChangeEvent<HTMLInputElement>) {
    let expectationInput = target.value.replace(/[^0-9]/g, '')
    const maxLength = 3

    if (expectationInput.length > maxLength) {
      expectationInput = expectationInput.slice(0, maxLength)
    }
    onAgeChange(expectationInput)
  }

  return (
    <Wrapper align='flex-start'>
      <Card
        height={300}
        width={600}
        mdHeight={300}
        mdWidth={600}
        smHeight={260}
        smWidth={320}
        marginTop={200}
        mdMarginTop={100}
        smMarginTop={150}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerRightCorner'
      >
        <Container>
          <h1>{Translator({ path: 'firstQuestion' })}</h1>
          <input
            ref={inputRef}
            type='text'
            value={age}
            onChange={handleAgeChange}
            onKeyDown={handleKeypress}/>
          <Button action={() => handlePageChange(2)} disabled={age === '' || Number(age) > 122} />
        </Container>
      </Card>
    </Wrapper>
  )
}
