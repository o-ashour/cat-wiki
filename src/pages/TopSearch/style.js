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

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    margin-bottom: 7em;
    padding: 0 2em;

    header {
      h1 {
        font-size: 2.1rem;
        margin-top: 1em;
        padding: 0;
      }
    }

    main {
      margin: 0;
      margin-top: 2.75em;
      padding: 0;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    padding: 0 5.25em;

    header {
      h1 {
        font-size: 2.25rem;
        font-weight: 700;
      }
    }
  }
`