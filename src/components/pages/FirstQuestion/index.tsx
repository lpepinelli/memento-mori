import { Card } from '../../Card'
import { Wrapper } from '../../Wrapper'

export function FirstQuestion () {
  return (
    <Wrapper align='flex-start'>
      <Card
        height={300}
        width={600}
        mdHeight={300}
        mdWidth={600}
        marginTop={200}
      >
          <h1>How old are you ?</h1>
      </Card>
    </Wrapper>
  )
}
