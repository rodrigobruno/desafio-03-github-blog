import { createGlobalStyle } from 'styled-components'
import iconX from '../assets/icon-x.svg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;

    background: ${(props) => props.theme.blue};
    cursor: pointer;
    height: 1rem;
    mask-image: url(${iconX});
    -webkit-mask-image: url(${iconX});
    mask-size: 0.75rem;
    mask-repeat: no-repeat;
    width: 1rem;
  }
  
  body {
    background-color: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['blue-200']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 160%;
  }
`
