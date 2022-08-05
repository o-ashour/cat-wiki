import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 1em;

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    margin: 1.5em 5em;
  }
`