import styled from "styled-components";

export const StyledSelected = styled.div`

  position: relative;
  width: 20em;
  margin: 3em auto 0;
  display: flex;
  align-items: center;

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
      height: 16em;
      top: 6em;
      left: -13px;
      z-index: -1;
      border-radius: 15px;
  }
`;
