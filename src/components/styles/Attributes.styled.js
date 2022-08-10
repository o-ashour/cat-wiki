import styled from "styled-components";

export const StyledAttributes = styled.section`
  font-size: 0.95rem;
  margin: 1.75em 2em 2.75em;


  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    margin: 0;
  }
`
