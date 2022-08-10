import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './styles/Input.styled';
import { StyledMatchbox } from './styles/Matchbox.styled';

function Input() {
  return (
    <label style={{width: '23.75em'}}>
      <StyledInput placeholder='Search' />
      <FaSearch />
      <StyledMatchbox>
        <ul>
          <li>American Bobtail</li>
          <li>American Curl</li>
          <li>American Shorthair</li>
          <li>American Wirehair</li>
          <li>American Bobtail</li>
          <li>American Curl</li>
          <li>American Shorthair</li>
          <li>American Wirehair</li>
        </ul>
      </StyledMatchbox>
    </label>
  )
}

export default Input;