import styled from "styled-components";

export const StyledProfile = styled.section`
  
  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    display: flex;
    margin-bottom: 3em;

    img {
      width: 14em;
      height: 14em;
      object-fit: cover;
      border-radius: 27px;
    }

    .description {
      margin-left: 2.75em;

      h2 { 
        font-weight: 400;
        font-size: 2.1rem;
        margin: 0;
        margin-bottom: 0.6em;
      }

      p {
        font-size: 1.1rem;
        margin: 0;
      }
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){

    img {
      width: 10.5em;
      height: 10.5em;
    }

    .description {
      h2 { 
        font-weight: 600;
        font-size: 2.25rem;
      }

      p {
        font-weight: 500;
        font-size: 1.125rem;
        padding-right: 8em;
      }
    }
  }
`