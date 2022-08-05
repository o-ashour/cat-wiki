import styled from "styled-components";

export const StyledDesc = styled.p`
  font-size: 0.8rem;
  width: 50%;
  color: ${(props) => props.theme.colors.primary};

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    font-size: 1.5rem;
    width: 35%;
  }
`