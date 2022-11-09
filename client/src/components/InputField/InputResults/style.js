import styled from "styled-components";

export const StyledInputResults = styled.ul`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.tertiary};
  position: absolute;
  width: inherit;
  font-size: 0.75rem;
  margin-top: 0.5em;
  padding: 0.75em 1em;
  border-radius: 1em;

  #focused-link {
    li {
      background-color: ${(props) => props.theme.colors.accent_3};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tertiary};
  }

  li {
    margin-bottom: 0.75em;

    :hover {
      font-weight: 600;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    max-height: 14em;
    font-size: 0.9rem;
    margin-top: 0.75em;
    padding: 1.2em 1.4em 0.1em;

    li {
      margin-bottom: 1.5em;
    }

    li:last-child {
      margin-bottom: 0.75em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1em 1.6em 0.4em;
    border-radius: 28px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
    }

    li {
      margin-bottom: 1.9em;
      padding: 0.25em;
    }

    li:last-child {
      margin-bottom: 0.5em;
    }
  }
`;
