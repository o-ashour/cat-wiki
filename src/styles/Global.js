import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  

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

  button {
    background: none;
    border: none;
    font-family: 'Montserrat', sans-serif; 
    padding: 0;   
  }

  img {
    max-width: 100%;
  }

  hr {
    margin: 0;
  }

  figure {
    margin: 0;
  }
`
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');


// @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC&display=swap');
export default GlobalStyles;

