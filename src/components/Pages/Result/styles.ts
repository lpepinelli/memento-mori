import styled from 'styled-components'
import { motion } from 'framer-motion'
interface ContainerValueProps {
  readonly height: number;
  readonly mdHeight: number;
  readonly smHeight: number;
  readonly width: number;
  readonly mdWidth: number;
  readonly smWidth: number;
  readonly bgColor?: 'light' | 'dark';
}

interface ContainerProps {
  readonly justifyContent?: string
}

export const Title = styled(motion.h1)`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (max-height: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 412px) {
    margin-bottom: 0px;
    height: 108px;
    font-size: 30px;
  }
`
export const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  gap: 10px;
  /* background-color: aliceblue; */

  @media(max-width: 412px) {
    overflow-y: auto;
    flex-direction: column;
  }
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

  border-radius: ${({ bgColor }) => bgColor === 'dark'
                    ? '0px 6px 6px 0px'
                    : '6px 0px 0px 6px'};

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

  @media (max-width: 412px) {
    h2 {
      font-size: 20px;
      span {
        font-size: 16px;
      }
      small {
        font-size: 14px;
      }
    }

    p {
      font-size: 14px;
    }

    width: ${({ smWidth }) => smWidth}px;
    height: ${({ smHeight }) => smHeight}px;
  }
`
