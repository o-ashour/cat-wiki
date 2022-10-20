import styled from "styled-components";
import bgImgSm from "../../assets/images/HeroImagesm.png";
import bgImgMd from "../../assets/images/HeroImagemd.png";
import bgImgLg from "../../assets/images/HeroImagelg.png";

export const StyledHome = styled.div`
  .container {
    margin: 0 1.25em 4em;
  }

  .hero-container {
    background-color: ${(props) => props.theme.colors.tertiary};
    background-image: url(${bgImgSm});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em 1.8em 2em;
    border-radius: 3em 3em 0 0;

    .wrapper {
      display: flex;
    }

    svg {
      font-size: 0.75em;
      color: #291507;
      position: absolute;
      top: 10px;
      right: 13px;
    }

    img {
      width: 5em;
    }

    .logo-cover {
      height: 1.4em;
      width: 4em;
      background: #000;
      position: absolute;
      left: 6.25em;
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

  .state-message {
    width: inherit;

    p {
      position: absolute;
      font-size: 0.75rem;
      color: #fff;
      font-weight: 600;
      margin-left: 0.75em;
      margin-top: 0.5em;
    }
  }

  .error-message {
    position: absolute;
    width: inherit;
    background-color: ${(props) => props.theme.colors.accent_6};
    margin-top: 0.65em;
    padding: 0.01em 0.75em;
    border-radius: 4px;
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
    // grid-template-columns: 3em 8.25em 8.75em;
    // width: 50%;
    // margin-left: auto;
    // margin-right: auto;

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

  @media (min-width: 435px) {
    .hero-container {
      background-size: contain;
      background-position: right;
    }

    .article-images {
      padding-left: 3em;
      padding-right: 3em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    .hero-container {
      svg {
        font-size: 0.8em;
        top: 12px;
      }

      img {
        width: 6em;
      }

      .logo-cover {
        height: 1.6em;
        left: 7.1em;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .input-search {
      width: 11.25em;
    }

    .article-images {
      padding-left: 4em;
      padding-right: 4em;
    }
  }

  // @media (min-width: 700px) {
  //   .article-images {
  //     padding-left: 5em;
  //     padding-right: 5em;
  //   }
  // }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    .container {
      margin-left: 2em;
      margin-right: 2em;
    }

    .hero-container {
      background-image: url(${bgImgMd});
      background-size: cover;
      background-position: center;
      padding: 4em 5em 5em;

      svg {
        font-size: 1em;
        top: initial;
        left: initial;
        bottom: 18px;
        right: 13px;
        opacity: 0.8;
      }

      img {
        width: 14em;
      }

      .logo-cover {
        display: none;
      }

      p {
        font-size: 1.2rem;
        margin-top: 1.35em;
      }
    }

    .input-search {
      width: 15em;
    }

    .state-message {
      p {
        font-size: 0.9rem;
        margin-top: 1.05em;
        margin-left: 0.85em;
      }
    }

    .error-message {
      width: 10em;
      width: auto;
      margin-left: 0.7em;
      padding: 0;

      p {
        font-size: 0.8rem;
        text-align: left;
        width: inherit;
        margin: 0.8em;
        padding-left: 0.1em;
      }
    }

    .info {
      gap: 12px;
    }

    .article-summary {
      margin-right: 0;
      flex: 1;
    }

    .article-images {
      // grid-template-columns: 1em 8em 10em;
      grid-template-columns: 0.25fr 1.15fr 1.3fr;

      gap: 0.75em;
      grid-gap: 0.75em;
      flex: 1;
      margin-top: 2em;
      // margin-right: 4em;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 941px) {
    .hero-container {
      background-size: contain;
      background-position: right;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    .container {
      margin: 0 5em 5em;
    }

    .hero-container {
      background-image: url(${bgImgLg});
      background-size: cover;
      background-position: bottom;
      padding: 5em 6em 8em;

      svg {
        font-size: 1.25em;
        bottom: 34px;
        right: 22px;
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

    .state-message {
      p {
        font-size: 1.05rem;
        margin-top: 0.45em;
        margin-left: 1.1em;
      }
    }

    .error-message {
      width: 14em;
      margin-left: 1em;

      p {
        font-size: 1.125rem;
        // width: inherit;
        margin: 0.5em;
      }
    }

    .info {
      gap: 20px;
      padding: 1em 6em 3.25em;
    }

    // .article-images {
    //   grid-template-columns: 4em 12em 14.5em;
    //   gap: 1.5em;
    //   grid-gap: 1.5em;
    //   margin-top: 0;
    // }
  }

  @media (min-width: 1435px) {
    .hero-container {
      background-size: contain;
      background-position: right;
    }

    .article-images {
      grid-template-columns: 4em 12em 14.5em;
      gap: 1.5em;
      grid-gap: 1.5em;
      margin-top: 0;
    }
  }
`;
