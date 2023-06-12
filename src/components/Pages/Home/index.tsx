import { useContext } from 'react'
import { DarkContainer } from './styles'
import { FaQuoteRight } from 'react-icons/fa'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { pagesContext } from '../../../context/pagesContext'
import { Wrapper } from '../../Wrapper'
import { Translator } from '../../i18n'
import Switcher from '../../i18n/Switcher'

export function Home () {
  const { handlePageChange } = useContext(pagesContext)
  return (
    <Wrapper align='center'>
      <Card
        height={800}
        width={700}
        mdHeight={630}
        mdWidth={600}
        smHeight={500}
        smWidth={320}
        smMarginTop={70}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerLeftCorner'
      >
        <Switcher />
        <div style={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <DarkContainer>
            <a href='https://dailystoic.com/what-is-memento-mori/' target='_blank' rel="noreferrer">
              <FaQuoteRight size={12} />
            </a>
            <p><strong>Memento Mori</strong> — {Translator({ path: 'home.firstParagraph' })}</p>
          </DarkContainer>
          <p>{Translator({ path: 'home.secondParagraph' })}</p>
          <DarkContainer>
            <a href='https://dailystoic.com/what-is-memento-mori/' target='_blank' rel="noreferrer">
              <FaQuoteRight size={12} />
            </a>
            <p>{Translator({ path: 'home.thirdParagraph' })}</p>
          </DarkContainer>
          <p>{Translator({ path: 'home.warning' })}</p>
        </div>
        <Button action={() => handlePageChange(1)} />

      </Card>
    </Wrapper>
  )
}
