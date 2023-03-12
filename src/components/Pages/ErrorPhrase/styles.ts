import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Title = styled(motion.h1)`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1000px;
  color: ${({ theme }) => theme.colors.title};
`
