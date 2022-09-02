import styled from "styled-components";

export const StyledSelected = styled.div`

  position: relative;
  width: 20em;
  margin: 3em auto 0;
  display: flex;
  align-items: center;

  img {
    border-radius: 12px;
  }

  ::after {
    content: '';
    width: 16px;
    height: 73%;
    background: ${(props) => props.theme.colors.accent_3};
    position: absolute;
    left: -5px;
    z-index: 0;
    border-radius: 1em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    width: auto;
    img {
      height: 20em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    ::after {
      width: 3em;
      height: 80%;
      left: -13px;
      z-index: -1;
      border-radius: 15px;
  }
`
// height: 38%;
// left: 27%;
// border-radius: 19px;
// top: 6%;