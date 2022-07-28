import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

  * {
    box-sizing: border-box; 
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    height: 100%;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px; 
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles;

