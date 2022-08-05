import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};
  margin: 0 1.15em;
  padding-bottom: 1em;
  border-radius: 3em 3em 0 0;
  position: relative;
  bottom: 0;
  
  img {
    margin: 1.5em 1.75em 0.5em;
  }

  p {
    display:flex;
    align-items: center;
    font-size: 0.75rem;
    margin: 0;
    margin-left: 2.25em;
  }

  span:nth-child(1) {
    font-size: 1.5rem;
    margin-right: 0.4em;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
`