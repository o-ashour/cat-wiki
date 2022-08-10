import styled from "styled-components";

export const StyledC2a = styled.article`
  margin: 2em 1.25em 0;

  hr {
    width: 3.2em;
    border-top: 0.15em solid ${(props) => props.theme.colors.accent_2};  
  }

  h1 {
    font-weight: 600;
    font-size: 2.6rem;
    margin: 0.35em 0 1.4em;
  }

  h2 {
    font-weight: 600;
    margin-top: 1.25em;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    display: flex;
    padding: 1em 10em 3.25em 11em;

    hr {
      width: 4em;
      border-width: 0.15em;  
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1em;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 3em;
      padding-right: 4em;
    }

    .article-summary {
      margin-top: 5.25em;
    }
  }
`