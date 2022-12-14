import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box; 
  }

  html {
    min-height: 100%;
  }

  body {
    min-height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    margin: 0;
    font-family: 'Montserrat', sans-serif;    
    font-size: 16px; 
    color: ${({ theme }) => theme.colors.accent_1};
    overflow: ${(props) => (props.isNavOpen || props.isModalOpen ? "hidden" : "auto")}
  }

  p {
    line-height: 1.5;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
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
`;

export default GlobalStyles;
