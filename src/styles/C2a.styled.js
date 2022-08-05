import styled from "styled-components";

export const StyledC2a = styled.article`
  margin: 2em 1.25em 0;

  hr {
    width: 3.2em;
    border-top: 0.15em solid ${(props) => props.theme.colors.accent_2};  
  }

  h1 {
    font-weight: 600;
    font-size: 2.6rem;
    margin: 0.35em 0 1.4em;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent_1};
    opacity: 0.6;
    font-weight: 600;
    font-size: 0.8rem;
  }
`