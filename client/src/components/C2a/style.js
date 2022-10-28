import styled from "styled-components";

export const StyledC2a = styled.button`
  float: ${(props) =>
    props.id === "gallery-btn" && props.direction === "right"
      ? "right"
      : props.id === "gallery-btn" && props.direction === "left"
      ? "left"
      : "initial"};

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent_1};
    opacity: 0.6;
    font-weight: 600;
    font-size: 0.8rem;
  }

  svg {
    font-size: 0.9rem;
    margin-left: 0.75em;
  }

  .arrow-right {
    margin-right: 1.5em;
  }

  .arrow-left {
    margin-left: 1.5em;
    margin-right: 0.75em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    a {
      font-size: 0.9rem;
    }

    .arrow-right {
      margin-right: 4em;
    }

    .arrow-left {
      margin-left: 4em;
      margin-right: 0.75em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    a {
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;
