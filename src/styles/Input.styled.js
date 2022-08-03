import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const StyledInput = styled.input`
  font-family: 'Montserrat', sans-serif;    
  padding: 0.65em 1em;
  width: 8em;
  border-radius: 2em;
  border: none;

  ::placeholder {
    font-size: 0.8rem;
    color: #291507;
    opacity: 1;
  }
`