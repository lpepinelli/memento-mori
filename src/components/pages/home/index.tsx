import { useContext } from 'react'
import { DarkContainer } from './styles'
import { FaQuoteRight } from 'react-icons/fa'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { pagesContext } from '../../../context/pagesContext'
import { Wrapper } from '../../Wrapper'

export function Home () {
  const { handlePageChange } = useContext(pagesContext)
  return (
    <Wrapper align='center'>
      <Card
        height={800}
        width={700}
        mdHeight={600}
        mdWidth={600}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        shadowDirection='lowerLeftCorner'
      >
        <DarkContainer>
          <a href='https://dailystoic.com/what-is-memento-mori/' target='_blank' rel="noreferrer">
            <FaQuoteRight size={12} />
          </a>
          <p><strong>Memento Mori</strong> — (Latin: remember you will die) – is the ancient practice of reflection on our mortality that goes back to Socrates, who said that the proper practice of philosophy is “about nothing else but dying and being dead.”</p>
        </DarkContainer>
        <p>The purpose of this app is to remind you how much time you have left and how you could use it. For some people this information may be sad to know, but the intention is just the opposite.</p>
        <DarkContainer>
          <a href='https://dailystoic.com/what-is-memento-mori/' target='_blank' rel="noreferrer">
            <FaQuoteRight size={12} />
          </a>
          <p>Meditating on your mortality is only depressing if you miss the point. It is in fact a tool to create priority and meaning. It’s a tool that generations have used to create real perspective and urgency. To treat our time as a gift and not waste it on the trivial and vain. Death doesn’t make life pointless but rather purposeful. And fortunately, we don’t have to nearly die to tap into this. A simple reminder can bring us closer to living the life we want.</p>
        </DarkContainer>
        <p>If you want to continue, click the button below. Clock is ticking...</p>
        <Button action={() => handlePageChange(1)} />
      </Card>
    </Wrapper>
  )
}
