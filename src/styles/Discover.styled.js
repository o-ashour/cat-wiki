import styled from "styled-components";

export const StyledDiscover = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.accent};
  padding: 1.2em 1.8em;

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
      width: 47%;
    }

    figcaption {
      font-size: 0.8rem;
      font-weight: 600;
      margin: 0.5em 0 1.5em;
      }
  }
  
`

// margin-right: 0.75em;
