import styled from "styled-components";

export const StyledDiscover = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.accent};
  padding: 1.2em 1.8em;
  border-radius: 0 0 3em 3em;

  header {
    h3 {
      font-weight: 400;
      font-size: 0.9rem;
    }

    hr {
      width: 3em;
      margin-top: 0.25em;
      border-top: 0.15em solid ${(props) => props.theme.colors.accent_2};
      border-radius: 2px;
    }

    h2 {
      font-weight: 600;
      font-size: 1.2rem;
      width: 11em;
    }
  }
  
  article {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5em;
    justify-content: space-between;

    figure {
      width: 48%;
    }

    figcaption {
      font-size: 0.8rem;
      font-weight: 600;
      margin: 0.5em 0 1.5em;
    }

    img {
      border-radius: 1em;
      height: 8.5em;
    }
  }

  .discover-selected {
    width: auto;
    margin: 0;

    ::after {
      z-index: 0;
    }

    img {
      z-index: 1;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    padding: 1.5em 7em 5em;

    header {
      h3 {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.4em;
      }

      hr {
        width: 3.75em;
      }
    }

    .discover-heading {
      display: flex;
      justify-content: space-between;
      margin: 2.5em 0 1em;

      h2 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
      }

      button {
        align-self: end;
      }
    }

    article {
      flex-wrap: initial;
      justify-content: initial;
      gap: 3.25em;
      margin-top: 3.25em;

      figure {
        width: 47%;
      }

      figcaption {
        font-size: 1.2rem;
        margin: 0.75em 0 1.5em;
      }

      img {
        height: 14em;
        border-radius: 2em;
      }
    }
  }  
`

// margin-right: 0.75em;
