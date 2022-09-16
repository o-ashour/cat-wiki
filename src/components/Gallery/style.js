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

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5em;
    margin: 1.5em 0 0.75em;
    padding: 0 1em;

    // figure:nth-child(n + 5) {
    //   display: ${(props) => (props.imgGroup === 0 ? "none" : null)};
    // }

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

    .container {
      justify-content: start;
      gap: 2em;
      margin-bottom: 1em;

      svg {
        display: none;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    padding: 3em 5.25em 8em;

    header {
      h2 {
        font-size: 2.3rem;
        padding: 0;
      }
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
