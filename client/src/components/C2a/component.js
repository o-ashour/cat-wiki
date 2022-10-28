import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { StyledC2a } from "./style";
import { Link } from "react-router-dom";

function C2a({ value, linkType, url, onClick, direction, id }) {
  return (
    <StyledC2a id={id} direction={direction} linkType={linkType}>
      {linkType === "external" ? (
        <a href={url} target='_blank'>
          {direction === "left" ? (
            <FaLongArrowAltLeft className="arrow-left" />
          ) : null}
          {value}
          {direction === "right" ? (
            <FaLongArrowAltRight className="arrow-right" />
          ) : null}
        </a>
      ) : (
        <Link to={url} onClick={onClick}>
          {direction === "left" ? (
            <FaLongArrowAltLeft className="arrow-left" />
          ) : null}
          {value}
          {direction === "right" ? (
            <FaLongArrowAltRight className="arrow-right" />
          ) : null}
        </Link>
      )}
    </StyledC2a>
  );
}

export { C2a };
