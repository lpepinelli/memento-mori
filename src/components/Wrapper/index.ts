import styled from 'styled-components'

interface WrapperProps {
  readonly align?: 'center' | 'flex-start' | 'flex-end';
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: center;
  height: 950px;

  @media (max-height: 768px) {
    height: 650px;
  }

  @media (max-width: 612px) {
    height: 630px;
  }
`
