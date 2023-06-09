import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['gray-800']};
  }

  button {
    border: 0;
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
  }
`
