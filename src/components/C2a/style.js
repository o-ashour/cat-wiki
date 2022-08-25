import styled from "styled-components";

export const StyledC2a = styled.button`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent_1};
    opacity: 0.6;
    font-weight: 600;
    font-size: 0.8rem;
  }

  svg {
    font-size: 0.9rem; 
    margin-left: 0.75em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}) {
    a {
      font-size: 0.9rem;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    a {
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`