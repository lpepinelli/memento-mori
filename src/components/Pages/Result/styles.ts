import styled from 'styled-components'
import { motion } from 'framer-motion'
interface ContainerValueProps {
  readonly height: number;
  readonly mdHeight: number;
  readonly width: number;
  readonly mdWidth: number;
  readonly bgColor?: 'light' | 'dark';
}

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
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
`

export const ContainerValue = styled.div<ContainerValueProps>`
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
