import styled from "styled-components";

export const StyledSelected = styled.div`

  position: relative;
  width: 20em;
  margin: 0 auto;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    width: 3em;
    height: 80%;
    background: ${(props) => props.theme.colors.accent_3};
    position: absolute;
    left: -8px;
    z-index: -1;
    border-radius: 10px;
  }
`