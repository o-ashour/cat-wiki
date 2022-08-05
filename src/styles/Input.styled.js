import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Montserrat', sans-serif;    
  padding: 0.65em 1em;
  width: 8em;
  border-radius: 2em;
  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 0.8rem;
    color: #291507;
    opacity: 1;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    width: 28em;
    padding: 1.75em 1.75em;
    border-radius: 3em;
    
    ::placeholder {
      font-size: 1.1rem;
    }
  }
`