import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SwitcherContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: palegoldenrod;

  svg {
    background-color: paleturquoise;
  }

  &:hover {
    div button {
      display: flex;
      opacity: 1;
    }
  }
`
export const FlagsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  button {
    display: none;
    opacity: 0;
    border: none;
    background: transparent;
    transition: display opacity 2.2s ease-in;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`
