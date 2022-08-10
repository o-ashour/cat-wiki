import styled from "styled-components";

export const StyledGallery = styled.section`
  header {
    h2 {
      font-weight: 600; 
      padding: 0 0.75em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    padding: 3em 5.25em 8em;
    header {
      h2 {
        font-size: 2.3rem;
        padding: 0;

      }
    }

    svg {
      display: none;
    }

    img {
      width: 17.5em;
      height: 18em;
      border-radius: 2em;
    }

    .details-gallery {
      justify-content: start;
      gap: 2.5em;
      margin-top: 2.4em;
    }
  }
`