import styled from 'styled-components'
import { motion } from 'framer-motion'
interface ContainerValueProps {
  readonly height: number;
  readonly mdHeight: number;
  readonly width: number;
  readonly mdWidth: number;
  readonly bgColor?: 'light' | 'dark';
}

interface ContainerProps {
  readonly justifyContent?: string
}

export const Title = styled(motion.h1)`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`
export const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  gap: 10px;
  /* background-color: aliceblue; */
`

export const ResultContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media (max-height: 768px) {
    gap: 5px;
  }
  `

export const ResultWrapper = styled(motion.div)`
  display: flex;
  position: relative;

  .questionTooltip {
    position: absolute;
    right: 8px;
    top: 4px;
    color: ${({ theme }) => theme.colors.primary.light};
    opacity: 0;
    /* border: 1px solid red; */
    transition: color 0.5s ease-in, opacity 0.2s ease-in;
  }

  &:hover {
    .questionTooltip {
      opacity: 1;
    }
  }
`

export const ContainerValue = styled(motion.div)<ContainerValueProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ bgColor, theme }) => bgColor === 'dark'
                  ? theme.colors.primary.dark
                    : theme.colors.primary.main};
  border: 3px solid ${({ theme }) => theme.colors.primary.dark};

  h2 span {
    font-size: 24px;
  }

  h2 small {
    font-size: 20px;
  }

  @media (max-height: 768px) {
    width: ${({ mdWidth }) => mdWidth}px;
    height: ${({ mdHeight }) => mdHeight}px;
  }
`
