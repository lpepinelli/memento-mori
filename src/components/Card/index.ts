import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface CardProps {
  readonly height: number;
  readonly mdHeight: number;
  readonly width: number;
  readonly mdWidth: number;
  readonly marginTop?: number;
  readonly mdMarginTop?: number;
  readonly shadowDirection: 'lowerLeftCorner' | 'lowerRightCorner' | 'upperRightCorner' | 'lowerCentered';
}

const shadowVariants = {
  lowerLeftCorner: css`
    box-shadow: -14px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  `,
  lowerRightCorner: css`
    box-shadow: 14px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  `,
  upperRightCorner: css`
    box-shadow: 14px -14px 0px ${({ theme }) => theme.colors.primary.dark};
  `,
  lowerCentered: css`
    box-shadow: 0px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  `
}

export const Card = styled(motion.div)<CardProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ shadowDirection }) => shadowVariants[shadowDirection] || shadowVariants.lowerLeftCorner}

  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop}px;
  `}

  @media (max-height: 768px) {
    height: ${({ mdHeight }) => mdHeight}px;
    width: ${({ mdWidth }) => mdWidth}px;
    gap: 8px;
    ${({ mdMarginTop }) => mdMarginTop && css`
      margin-top: ${mdMarginTop}px;
    `}
  }
`
