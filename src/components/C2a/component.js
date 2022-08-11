import { FaLongArrowAltRight } from 'react-icons/fa';
import { StyledC2a } from './style';

function C2a({ value }){
  return (
    <StyledC2a>
      <a href="#">
        {value}
        <FaLongArrowAltRight style={{fontSize: '0.9rem', marginLeft: '0.75em'}}/>
      </a>
    </StyledC2a>
  )
}

export { C2a };