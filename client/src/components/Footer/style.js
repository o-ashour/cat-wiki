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

  .footer-link {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    display: flex;
    justify-content: space-between;
    margin: 0 2em;
    padding: 1.5em 2em 1.25em 4em;
    
    img {
      margin: 0;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.large}){
    margin: 0 5.25em;
    padding: 2em 2em 2.5em 6.5em;

    p {
      font-size: 1.1rem;
    }
  }
`