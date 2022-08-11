import styled from "styled-components";

export const StyledGallery = styled.section`
  padding: 0;
  header {
    h2 {
      font-weight: 600; 
      padding: 0 0.75em;
    }
  }

  .details-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
    margin: 1.5em 0;
  
    img {
      width: 10em;
      height: 9em;
      object-fit: cover;
      border-radius: 1em;
    }

    figure:nth-child(n+7) {
      display: none;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){  
    margin-bottom: 3em;
      
    header {
      margin-left: 2em;

      h2 {
        font-size: 1.5rem;
      }
    }

    .details-gallery {
      svg {
        display: none;
      }

      img {
        width: 11em;
        height: 10em;
      }

      figure:nth-child(n+7) {
        display: block;
      }
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

      img {
        width: 18em;
        height: 18em;
      }

      figure:nth-child(n+7) {
        display: block;
      }
    }
  }
`