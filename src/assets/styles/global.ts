import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chivo', sans-serif;
    transition: background-color 0.5s ease-in, border-color 0.5s ease-in, box-shadow 0.5s ease-in;
  }

  h1 {
    font-weight: 100;
    text-align: center;

    @media (max-width: 412px) {
      font-size: 35px;
    }
  }



  input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    height: 35px;
    width: 100px;
    outline: none;
    color: #fff;
    font-size: 25px;
    text-align: center;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 20px;
    @media (max-height: 768px) {
      font-size: 17.8px;
    }
    color: ${({ theme }) => theme.colors.fontColor};
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.light};
    transition: background-color 0.5s ease-in;
  }
`
