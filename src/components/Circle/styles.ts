import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CircleContainer = styled(motion.button)`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: 15px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 10px;
`
