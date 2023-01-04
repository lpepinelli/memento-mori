import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chivo', sans-serif;
    transition: background-color 0.5s ease-in, border-color 0.5s ease-in, box-shadow 0.5s ease-in, color 0.5s ease-in;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 20px;
  @media (max-height: 768px) {
    font-size: 18px;
  }
    color: ${({ theme }) => theme.colors.fontColor};
  }

  button {
    cursor: pointer;
  }
`
