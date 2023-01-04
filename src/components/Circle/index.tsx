import { CircleContainer } from './styles'

interface CircleProps {
  action: () => void
}

export function Circle ({ action }: CircleProps) {
  return (
    <CircleContainer onClick={action}/>
  )
}
