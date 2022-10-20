import styled from "styled-components";

export const StyledInput = styled.div`
  width: inherit;
  position: relative;

  .input-btn {
    font-family: "Montserrat", sans-serif;
    padding: 0.65em 1em;
    width: 100%;
    border-radius: 2em;
    border: none;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 0.8rem;
      color: #291507;
      opacity: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    .input-btn {
      padding: 0.85em 1em;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    .input-btn {
      padding: 1.25em 2em;
      margin-top: 2em;

      ::placeholder {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    height: 7.75em;

    .input-btn {
      font-size: 1.375rem;
      font-weight: 500;
      margin: 1.9em 0 0.75em;
      padding: 1.15em 1.45em;
      border-radius: 3em;

      ::placeholder {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
  }
`;
