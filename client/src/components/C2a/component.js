import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { StyledC2a } from "./style";
import { Link } from "react-router-dom";

function C2a({ value, url, onClick, direction, id }) {
  return (
    <StyledC2a id={id} direction={direction}>
      <Link to={url} onClick={onClick}>
        {direction === "left" ? <FaLongArrowAltLeft className='arrow-left' /> : null}
        {value}
        {direction === "right" ? <FaLongArrowAltRight className='arrow-right'/> : null}
      </Link>
    </StyledC2a>
  );
}

export { C2a };
