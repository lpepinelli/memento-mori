import { BsArrowRight } from 'react-icons/bs'
import { StyledButton } from './styles'

interface ButtonProps {
  action: () => void,
  disabled?: boolean
}

export function Button ({ action, disabled }: ButtonProps) {
  return (
    <StyledButton name="Next" onClick={action} disabled={disabled || false}><BsArrowRight /></StyledButton>
  )
}
