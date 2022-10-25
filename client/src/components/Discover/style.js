import styled from "styled-components";

export const StyledDiscover = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.accent};
  padding: 1.2em 1.8em 2.25em;
  border-radius: 0 0 3em 3em;

  header {
    h3 {
      font-weight: 400;
      font-size: 0.9rem;
      margin-bottom: 0.45em;
    }

    hr {
      width: 3em;
      height: 3px;
      margin-top: 0.25em;
      background: ${(props) => props.theme.colors.accent_2};
      border: none;
      border-radius: 25px;
    }

    h2 {
      font-weight: 600;
      font-size: 1.2rem;
      width: 11em;
    }
  }

  article {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5em;
    justify-content: space-between;

    figure {
      width: 48%;

      :first-child {
        position: relative;

        img {
          position: relative;
        }

        ::before {
          content: "";
          width: 12px;
          height: 57%;
          background: ${(props) => props.theme.colors.accent_3};
          position: absolute;
          top: 14px;
          left: -4px;
          z-index: 0;
          border-radius: 1em;
        }
      }
    }

    figcaption {
      font-size: 0.8rem;
      font-weight: 600;
      margin: 0.5em 0 1.5em;
    }

    img {
      border-radius: 1em;
      object-fit: cover;
      object-position: top;
      height: 8em;
      width: 100%;
    }
  }

  .discover-selected {
    width: auto;
    margin: 0;

    ::after {
      z-index: 0;
    }

    img {
      z-index: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    article {
      figure {
        :first-child {
          ::before {
            top: 24px;
          }
        }
      }
      img {
        height: 10em;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 1.2em 5em 2.5em;

    header {
      h3 {
        font-weight: 500;
        font-size: 1rem;
        margin-bottom: 0.5em;
      }

      hr {
        margin-top: 0.35em;
      }
    }

    .discover-heading {
      display: flex;
      justify-content: space-between;
      margin-top: 0.7em;

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0;
      }

      button {
        align-self: end;
      }
    }

    article {
      margin-top: 2.25em;

      figure {
        :first-child {
          ::before {
            height: 54%;
            top: 30px;
            left: -3px;
            border-radius: 37px;
          }
        }
      }

      figcaption {
        font-size: 0.9rem;
        margin: 0.35em 0 1.5em;
      }

      img {
        height: 12em;
        border-radius: 2.25em;
      }
    }
  }

  @media (min-width: 1000px) {
    article {
      figure {
        :first-child {
          ::before {
            height: 56%;
            top: 42px;
          }
        }
      }

      img {
        height: 15.5em;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    padding: 1.5em 6.25em 5em;

    header {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.4em;
      }

      hr {
        width: 3.75em;
      }
    }

    .discover-heading {
      margin: 2.5em 0 1em;

      h2 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
      }
    }

    article {
      // flex-wrap: initial;
      // justify-content: space-around;
      gap: 1.55em;
      margin-top: 3.25em;

      figure {
        // width: initial;
        flex: 1;

        :first-child {
          ::before {
            top: 34px;
          }
        }
      }

      figcaption {
        font-size: 1.2rem;
        margin: 0.75em 0 1.5em;
      }

      img {
        height: 14.5em;
        border-radius: 2em;
      }
    }
  }
`;
