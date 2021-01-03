import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  .calc-content, .grid-top input[type=text], .grid-top input[type=text]:disabled {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .calc-content {
    border: 1px solid ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px 10px ${({ theme }) => theme.shadow};
  }

  .grid-top, .grid-body .tch {
    border: 2px solid ${({ theme }) => theme.border};
  }

  .grid-body .tch {
    border-radius: ${({ theme }) => theme.bRadius};
  }
`