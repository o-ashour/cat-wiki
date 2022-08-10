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
    width: inherit;
    margin: 1.9em 0 0.75em;
    padding: 1.9em 2em;
    border-radius: 3em;
    
    ::placeholder {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`