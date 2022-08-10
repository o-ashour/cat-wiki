import styled from "styled-components";

export const StyledProfile = styled.section`
  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    display: flex;
    margin-bottom: 3em;

    img {
      width: 10.5em;
      height: 10.5em;
      object-fit: cover;
      border-radius: 27px;
    }

    .description {
      margin-left: 2.75em;

      h2 { 
        font-weight: 600;
        font-size: 2.25rem;
        margin: 0;
        margin-bottom: 0.6em;
      }

      p {
        font-weight: 500;
        font-size: 1.125 rem;
        margin: 0;
        padding-right: 8em;
      }
    }
  }
`