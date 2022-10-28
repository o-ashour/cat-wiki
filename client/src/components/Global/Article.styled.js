import styled from "styled-components";

export const StyledArticle = styled.article`
  margin: 2em 1.25em 0;

  hr {
    width: 3.2em;
    height: 3px;
    background: ${(props) => props.theme.colors.accent_2};
    border: none;
    border-radius: 25px;  
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

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    display: flex;
    margin: 2em 1.25em 2em;
    padding-bottom: 0.75em;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 0.55em;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.25em;
      padding-right: 4em;
    }

    .article-summary {
      margin-top: 1.25em;
      margin-right: 1em;
      padding-left: 4em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.large}){
    padding: 1em 10em 3.25em 11em;

    hr {
      width: 4em;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1em;
    }

    p {
      font-size: 1.1rem;
    }

    .article-summary {
      margin-top: 5.25em;
    }
  }
`