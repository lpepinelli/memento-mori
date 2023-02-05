import { CircleContainer } from './styles'

interface CircleProps {
  onToggleTheme: () => void
}

export function Circle ({ onToggleTheme }: CircleProps) {
  return (
    <>
      <CircleContainer
        whileHover={{ scale: 1.08 }}
        onClick={onToggleTheme}/>
    </>
  )
}
