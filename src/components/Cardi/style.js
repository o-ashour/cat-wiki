import styled from "styled-components";

export const StyledCard = styled.figure`
  // img {
  //   width: ${(props) => props.imgWidth === 'full' ? '100%' : 'auto'};
  //   max-height: 18em;
  //   object-fit: cover;
  //   border-radius: 2em;
  // }

  // :first-child{
  //   position: relative;

  //   img {
  //     z-index: 2;
  //   }
  //   ::before {
  //     content: '';
  //     width: 16px;
  //     height: 73%;
  //     background: ${(props) => props.theme.colors.accent_3};
  //     position: absolute;
  //     left: -5px;
  //     z-index: 0;
  //     border-radius: 1em;
  //   }
  // }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    // img {
    //   height: 14em;
    // }
  }
`