import styled from "styled-components";

export const StyledPhoto = styled.figure`
  img {
    height: 6.5em;
    border-radius: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    img {
      height: 12em;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.extra_large}) {
    img {
      height: 14em;
    }
  }
`;
