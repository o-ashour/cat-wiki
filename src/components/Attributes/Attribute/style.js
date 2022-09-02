import styled from "styled-components";

export const StyledAttribute = styled.div`
  margin-bottom: 0;
  display: flex;
  flex-flow: column;

  span:first-child {
    font-size: 1rem;
    font-weight: 600;
    margin: 1.5em 0 0.25em;
  }

  div {
    font-size: 0.9rem;
  }

  hr {
    background: ${(props) => props.theme.colors.accent_5};
    display: inline-block;
    width: 3em;
    height: 0.6em;
    margin-right: 0.5em;
    border: none;
    border-radius: 5px;
  }

  hr:nth-child(-n + ${(props) => props.score}) {
    background: ${(props) => props.theme.colors.accent_4};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-flow: row;
    margin-bottom: 1.5em;

    span:first-child {
      min-width: ${(props) => (props.type === "scale" ? "9.5em" : "auto")};
      font-weight: 500;
      margin: 0;
      margin-right: 0.8em;
    }

    div {
      margin: 0;
    }

    hr {
      width: 4em;
      height: 0.7em;
      margin-right: 0.8em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    margin-top: 2em;
    margin-right: 7em;
    color: ${(props) => props.theme.colors.tertiary};

    span:first-child {
      min-width: ${(props) => (props.type === "scale" ? "10em" : "auto")};
      font-weight: 700;
      margin: 0;
    }

    span:nth-child(2) {
      font-weight: 500;
      margin-left: 0.3em;
    }

    div {
      margin-left: 1.5em;
    }

    hr {
      height: 0.8em;
      margin-right: 0.55em;
      border-radius: 10px;
    }
  }
`;
