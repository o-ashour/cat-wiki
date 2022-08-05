import styled from "styled-components";
import bgImgSm from '../../assets/images/HeroImagesm.png';
import bgImgLg from '../../assets/images/HeroImagelg.png';

export const StyledHero = styled.section`
  background-image: url(${bgImgSm});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em 1.8em 2em;
  border-radius: 3em 3em 0 0;

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    background-image: url(${bgImgLg});
    padding: 5em 6em;
  }
`
