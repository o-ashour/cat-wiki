import styled from "styled-components";

export const StyledAttribute = styled.div`
  margin-bottom: 0;
  display: flex;
  flex-flow: column;
  
  p:nth-child(1){
    font-size: 1rem;
    font-weight: 600;
    margin: 1.5em 0 0.25em;
  }

  div {
    font-size: 0.9rem;
    align-self: center;
    margin: 0.5em 0;
  }

  hr {
    background: ${(props) => props.theme.colors.accent_4};
    display: inline-block;
    width: 3em;
    height: 0.6em;
    margin-right: 0.5em;
    border: none;
    border-radius: 5px;
  }

  hr:nth-child(2n){
    background: ${(props) => props.theme.colors.accent_5};  
  }
`