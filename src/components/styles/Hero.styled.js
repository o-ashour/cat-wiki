import styled from "styled-components";
import bgImgSm from '../../assets/images/HeroImagesm.png';
import bgImgLg from '../../assets/images/HeroImagelg.png';

export const StyledHero = styled.section`
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

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    background-image: url(${bgImgLg});
    background-position: bottom;
    padding: 5em 6em;

    svg {
      font-size: 1.25em;
      top: 0.2em;
      right: 2.1em;
      opacity: 0.8;
    }
  }
`
