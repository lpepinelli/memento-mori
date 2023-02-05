import styled, { css } from 'styled-components'

interface CardProps {
  readonly height: number;
  readonly mdHeight: number;
  readonly width: number;
  readonly mdWidth: number;
  readonly marginTop?: number;
}

export const Card = styled.div<CardProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: -14px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop}px;
  `}

  @media (max-height: 768px) {
    height: ${({ mdHeight }) => mdHeight}px;
    width: ${({ mdWidth }) => mdWidth}px;
    gap: 8px;
  }
`
