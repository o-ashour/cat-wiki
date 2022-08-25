import { FaLongArrowAltRight } from 'react-icons/fa';
import { StyledC2a } from './style';
import { Link } from 'react-router-dom';

function C2a({ value, url }){
  return (
    <StyledC2a>
      <Link to={url}>
        {value}
        <FaLongArrowAltRight />
      </Link>
    </StyledC2a>
  )
}

export { C2a };