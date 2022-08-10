import styled from "styled-components";

export const StyledLogo = styled.img`
  filter: ${({ theme }) => theme === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'};
  width: ${({ section }) => section === 'hero' ? '5em' : 'auto'};

  @media(min-width: 1200px){
    width: ${({ section }) => section === 'hero' ? '20em' : 'auto'};  }
`