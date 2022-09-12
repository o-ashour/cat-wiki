import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1em;

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    padding: 1.25em 2em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    padding: 1.5em 5.25em;
  }
`