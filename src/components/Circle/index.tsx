import { CircleContainer } from './styles'
import { useSpring, animated } from '@react-spring/web'

interface CircleProps {
  action: () => void
}

export function Circle ({ action }: CircleProps) {
  const [springs, api] = useSpring(() => ({
    from: { top: 10, right: 20, left: 0 }
  }))

  function handleHomeAnimation () {
    api.start({
      from: { top: 10, right: 20, left: 0 },
      to: [
        { top: 100, left: 200, right: 0 }
        // { top: 10, right: 20, left: 'auto' },
      ],
      immediate: true
    })
  }

  return (
    <>
      <animated.div style={{
        position: 'absolute',
        ...springs
      }}>
        <CircleContainer onClick={action}/>
      </animated.div>

      <button onClick={handleHomeAnimation}>start animation</button>
    </>
  )
}
