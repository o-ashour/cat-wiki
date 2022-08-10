import { FaLongArrowAltRight } from 'react-icons/fa';
import { StyledC2aReal } from './style';

function C2a({ value }){
  return (
    <StyledC2aReal>
      <a href="#">
        {value}
        <FaLongArrowAltRight style={{fontSize: '0.9rem', marginLeft: '0.75em'}}/>
      </a>
    </StyledC2aReal>
  )
}

export { C2a };