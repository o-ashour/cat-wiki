import styled from "styled-components";

export const StyledCard = styled.figure`
  img {
    width: ${(props) => props.imgWidth === 'full' ? '100%' : 'auto'};
    max-height: 18em;
    object-fit: cover;
    border-radius: 2em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    img {
      height: 14em;
    }
  }
`