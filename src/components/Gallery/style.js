import styled from "styled-components";

export const StyledGallery = styled.section`
  padding: 0;
  header {
    h2 {
      font-weight: 600;
      padding: 0 0.75em;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5em;
    margin: 1.5em 0;
    padding: 0 1em;


    figure:nth-child(n + 5) {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin-bottom: 3em;

    header {
      margin-left: 2em;

      h2 {
        font-size: 1.5rem;
      }
    }

    .container {
      justify-content: start;
      gap: 2em;
      
      svg {
        display: none;
      }
    }


    
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    padding: 3em 5.25em 8em;

    header {
      h2 {
        font-size: 2.3rem;
        padding: 0;
      }
    }

    .container {
      justify-content: start;
      gap: 2.5em;
      margin-top: 2.4em;

      figure:nth-child(n + 5) {
        display: block;
      }
    }
  }
`;
