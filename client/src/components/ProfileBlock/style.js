import styled from "styled-components";

export const StyledProfile = styled.section`
  margin-bottom: 2.5em;

  img {
    max-width: 20em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: flex;
    margin-bottom: 3em;

    img {
      width: 14em;
      object-fit: cover;
      object-position: left;
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

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    img {
      width: 17.5em;
    }

    .description {
      margin-left: 4.75em;

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
`;
