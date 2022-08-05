import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './styles/Input.styled';
import { StyledMatchbox } from './styles/Matchbox.styled';

function Input() {
  return (
    <label>
      <StyledInput placeholder='Search' />
      <FaSearch style={{fontSize:"0.75em", color: '#291507', position: 'relative', top: '0.06em', right: '2.05em'}}/>
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