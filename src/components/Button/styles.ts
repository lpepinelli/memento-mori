import styled from 'styled-components'

export const StyledButton = styled.button`
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


  &[disabled] {
    background: ${({ theme }) => theme.colors.primary.dark} !important;
    opacity: 0.5;
    cursor: default;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkHover};
    transition: background-color 0.2s ease-in, border-color 0.2s ease-in, color 0.2s ease-in;
  }
`
