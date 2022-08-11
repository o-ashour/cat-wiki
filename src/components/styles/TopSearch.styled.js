import styled from "styled-components";

export const StyledTopSearch = styled.article`
  header {
    h1 {
      font-size: 2.4rem;
      font-weight: 600; 
      padding: 0 1em; 
      text-align: left;
    }
  }

  main {
    margin: 3em 2em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    padding: 0 5.25em;

    header {
      h1 {
        font-size: 2.25rem;
        font-weight: 700;
        padding: 0;
      }
    }

    main {
      flex-flow: column;
      margin: 0;
      margin-top: 3.25em;
      padding: 0;
    }
  }
`