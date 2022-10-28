import styled from "styled-components";

export const StyledGallery = styled.section`
  margin-bottom: 2em;
  padding: 0;

  header {
    h2 {
      font-weight: 600;
      padding: 0 0.75em;
    }
  }

  .message {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    background: ${(props) => props.theme.colors.accent_7};
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 3px;
    width: fit-content;
    margin: 2em auto;
    padding: 0.75em;
    border-radius: 8px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5em;
    margin: 1.5em 0 0.75em;
    padding: 0 1em;

    figure:nth-child(n + 0):nth-child(-n + 4) {
      display: ${(props) => (props.imgGroup === 0 ? "block" : "none")};
    }

    figure:nth-child(n + 5):nth-child(-n + 8) {
      display: ${(props) => (props.imgGroup === 1 ? "block" : "none")};
    }
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin-bottom: 3em;

    header {
      margin-left: 2em;

      h2 {
        font-size: 1.5rem;
      }
    }

    .message {
      letter-spacing: 4px;
      margin: 3em auto;
      padding: 1em;
    }

    .container {
      justify-content: start;
      gap: 2em;
      margin-bottom: 1em;

      svg {
        display: none;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 3em 5.25em 8em;

    header {
      h2 {
        font-size: 2.3rem;
        padding: 0;
      }
    }

    .message {
      font-size: 1.4375rem;
    }

    .container {
      justify-content: start;
      gap: 2.5em;
      margin-top: 2.4em;

      figure:nth-child(n + 0):nth-child(-n + 8) {
        display: block;
      }
    }

    nav {
      display: none;
    }
  }
`;
