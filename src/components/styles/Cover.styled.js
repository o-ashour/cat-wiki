import styled from "styled-components";

export const Cover = styled.div`
  height: 1.4em;
  width: 4em;
  background: #000;
  position: absolute;
  left: 6.25em;

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    display: none;
  }
`
