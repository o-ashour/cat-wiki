import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { StyledMatchbox } from '../SearchModal/style';

function Input() {
  return (
    <label>
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

export { Input };