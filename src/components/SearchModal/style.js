import styled from "styled-components";

export const StyledMatchbox = styled.div`
  display: block;
  background-color: #fff;
  color: #000;
  position: absolute;
  height: 12em;
  width: 9em;
  overflow-y: scroll;
  font-size: 0.75rem;
  margin-top: 0.5em;
  padding: 0.75em 1em;
  border-radius: 1em;

  li {
    margin-bottom: 0.75em;

    :hover {
      background: lightgrey;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    height: 14em;
    width: inherit;
    font-size: 0.9rem;
    margin-top: 0.75em;
    padding: 1.2em 1.4em 0.1em;

    li {
      margin-bottom: 1.5em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1.4em 1.25em 0.75em;

    li {
      margin-bottom: 1.9em;
    }

    li:last-child {
      margin-bottom: 1em;
    }
  }
`