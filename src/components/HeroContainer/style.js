import styled from "styled-components";
import bgImgSm from '../../assets/images/HeroImagesm.png';
import bgImgLg from '../../assets/images/HeroImagelg.png';

export const StyledContainer = styled.div`
  margin: 0 1.25em 4em;

  p {
    font-size: 0.8rem;
    width: 50%;
    color: ${(props) => props.theme.colors.primary};
  }

  .hero-container {
    background-image: url(${bgImgSm});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em 1.8em 2em;
    border-radius: 3em 3em 0 0;
  
    svg {
      font-size: 0.75em;
      color: #291507;
      position: relative;
      top: 0.06em;
      right: 2.05em;
    }

    img {
        width: 5em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    margin: 0 5em 5em;

    p {
      font-size: 1.5rem;
      width: 35%;
      margin-top: 0.35em;
    }

    .hero-container {
      background-image: url(${bgImgLg});
      background-position: bottom;
      padding: 5em 6em 8em;
  
      svg {
        font-size: 1.25em;
        top: 0.2em;
        right: 2.1em;
        opacity: 0.8;
      }

      img {
        width: 20em;
      }
    }
  }
`