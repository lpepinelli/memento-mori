import { useContext, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react'
import { pagesContext } from '../../../context/pagesContext'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'
import { Container } from './styles'
import { Translator } from '../../i18n'

interface SecondQuestionProps {
  age: string,
  expectation: string,
  onExpectationChange: (expectation: string) => void
}

export function SecondQuestion ({ age, expectation, onExpectationChange }: SecondQuestionProps) {
  const { handlePageChange } = useContext(pagesContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const isMobile = window.innerWidth <= 612

  useEffect(() => {
    if (!isMobile) {
      inputRef?.current?.focus()
    }
  }, [])

  function handleKeypress (e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && Number(expectation) > Number(age)) {
      handlePageChange(3)
    }
  };

  function handleExpectationChange ({ target }: ChangeEvent<HTMLInputElement>) {
    let expectationInput = target.value.replace(/[^0-9]/g, '')
    const maxLength = 3

    if (expectationInput.length > maxLength) {
      expectationInput = expectationInput.slice(0, maxLength)
    }
    onExpectationChange(expectationInput)
  }

  return (
    <Wrapper align='flex-start'>
      <Card
        height={330}
        width={700}
        mdHeight={320}
        mdWidth={650}
        smHeight={260}
        smWidth={320}
        marginTop={200}
        mdMarginTop={100}
        smMarginTop={100}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='upperRightCorner'
      >
        <Container>
          <h1>{Translator({ path: 'secondQuestion' })}</h1>
          <input
            ref={inputRef}
            type='text'
            value={expectation}
            onChange={handleExpectationChange}
            onKeyDown={handleKeypress}/>
          <Button action={() => handlePageChange(3)} disabled={Number(expectation) <= Number(age)} />
        </Container>
      </Card>
    </Wrapper>
  )
}
