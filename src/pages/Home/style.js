import styled from "styled-components";
import bgImgSm from "../../assets/images/HeroImagesm.png";
import bgImgMd from "../../assets/images/HeroImagemd.png";
import bgImgLg from "../../assets/images/HeroImagelg.png";

export const StyledHome = styled.div`
  .container {
    margin: 0 1.25em 4em;
  }

  .hero-container {
    background-image: url(${bgImgSm});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em 1.8em 2em;
    border-radius: 3em 3em 0 0;

    svg {
      display: none;
      font-size: 0.75em;
      color: #291507;
      position: relative;
      top: -2.2em;
      left: 9.3em;
    }

    img {
      width: 5em;
    }

    p {
      font-size: 0.8rem;
      width: 50%;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .input-search {
    width: 8.25em;
  }

  .error-message {
    position: absolute;
    width: 6.75em;
    background-color: ${(props) => props.theme.colors.accent_6};
    margin-top: 0.65em;
    padding: 0.01em 0.75em;
    border-radius: 10px;
    opacity: 0.98;
    box-shadow: 2px 3px 4px ${(props) => props.theme.colors.accent_7};

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.primary};
      text-align: center;
      width: 100%;
      font-weight: 600;
    }
  }

  .article-images {
    display: grid;
    grid-template-columns: 0.25fr 1.15fr 1.3fr;
    gap: 1em;
    grid-gap: 1em;
    margin-top: 4em;
    padding-bottom: 0.5em;

    img:nth-child(1) {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    img:nth-child(2) {
      grid-row: 1 / 3;
      grid-column: 3 / 4;
    }

    img:nth-child(3) {
      grid-row: 2 / 4;
      grid-column: 2 / 3;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    .container {
      margin-left: 2em;
      margin-right: 2em;
    }

    .hero-container {
      background-image: url(${bgImgMd});
      padding: 4em 5em 5em;

      svg {
        font-size: 1em;
        top: -2.05em;
        left: 12.75em;
        opacity: 0.8;
      }

      img {
        width: 14em;
      }

      p {
        font-size: 1.2rem;
        width: 65%;
        margin-top: 1.35em;
      }
    }

    .input-search {
      width: 15em;
    }

    .article-images {
      grid-template-columns: 1em 8em 10em;
      gap: 0.75em;
      grid-gap: 0.75em;
      margin-top: 2em;
      margin-right: 4em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    .container {
      margin: 0 5em 5em;
    }

    .hero-container {
      background-image: url(${bgImgLg});
      background-position: bottom;
      padding: 5em 6em 8em;

      svg {
        font-size: 1.25em;
        top: -3.25em;
        left: 17.8em;
        opacity: 0.8;
      }

      img {
        width: 20em;
      }

      p {
        font-size: 1.5rem;
        width: 35%;
        margin-top: 0.35em;
      }
    }

    .input-search {
      width: 25em;
    }

    .article-images {
      grid-template-columns: 4em 12em 14.5em;
      gap: 1.5em;
      grid-gap: 1.5em;
      margin-top: 0;
    }
  }
`;
