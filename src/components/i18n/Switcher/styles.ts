import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SwitcherContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;

  svg {
    transition: color 0.5s ease-in;
  }
`

export const SwitcherButton = styled(motion.button)`
  border: none;
  background: transparent;
`

export const FlagsContainer = styled(motion.div)`
  margin-top: 2px;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    border: none;
    background: transparent;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`
