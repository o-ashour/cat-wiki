import styled from "styled-components";

export const StyledNav = styled.nav`
  svg {
    cursor: pointer;
    font-size: 1.5em;
    margin-top: 0.35em;
    margin-right: 0.2em;
  }

  .nav-menu {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    svg {
      font-size: 1.75em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    svg {
      display: none;
    }

    .nav-menu {
      display: block;
      margin-top: 0.75em;
      margin-right: 2em;

      li {
        display: inline-block;
        font-size: 1.125rem;
        font-weight: 600;
        margin-left: 1.5em;
        letter-spacing: 1.25px;
        color: ${(props) => props.theme.colors.accent_1};
        opacity: 0.7;
      }

      .nav-link:hover {
        color: ${(props) => props.theme.colors.accent_6};
        text-decoration: underline;
        opacity: 1;
      }

      .nav-link-active {
        opacity: 0.9;
      }
    }
  }
`;
