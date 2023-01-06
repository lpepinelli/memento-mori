import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  @media (max-height: 768px) {
    height: 650px;
  }
`

export const Card = styled.div`
  height: 800px;
  width: 700px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: -14px 14px 0px ${({ theme }) => theme.colors.primary.dark};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-height: 768px) {
    height: 600px;
    width: 600px;
    gap: 8px;
  }
`

export const DarkContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary.dark};
  padding: 16px;
  position: relative;
  border-radius: 8px;

  a {
    position: absolute;
    right: 8px;
    top: 5px;
    color: ${({ theme }) => theme.colors.primary.light};
    opacity: 0;
    /* border: 1px solid red; */
    transition: color 0.5s ease-in, opacity 0.2s ease-in;
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`

export const Button = styled.button`
  align-self: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.light};
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 4px;
  width: 80px;
  margin: auto 0;
  /* margin: auto 0 40px 0;
  @media (max-height: 768px) {
    margin: auto 0 0 0;
  } */
  font-size: 24px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease-in, border-color 0.5s ease-in, color 0.5s ease-in;
`
