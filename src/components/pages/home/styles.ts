import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Card = styled.div`
  height: 800px;
  width: 700px;
  @media (max-height: 768px) {
    height: 600px;
  }
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: -14px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const DarkContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary.dark};
  padding: 16px;
`

export const Button = styled.button`
  align-self: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.light};
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  width: 80px;
  height: 40px;
  margin: auto 0;
  /* margin: auto 0 40px 0;
  @media (max-height: 768px) {
    margin: auto 0 0 0;
  } */
  font-size: 24px;
`
