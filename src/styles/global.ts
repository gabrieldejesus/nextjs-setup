import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 18px Poppins, sans-serif;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
`
