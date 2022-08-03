import { FaSearch } from 'react-icons/fa';
import { StyledInput } from '../styles/Input.styled';

function Input() {
  return (
    <label>
      <StyledInput placeholder='Search' />
      <FaSearch style={{fontSize:"0.75em", color: '#291507', position: 'relative', top: '0.06em', right: '2.05em'}}/>
    </label>
  )
}

export default Input;