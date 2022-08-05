import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 1.25em 4em;

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    margin: 0 5em 5em;
  }
`