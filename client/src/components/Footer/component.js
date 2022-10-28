import { Logo } from "../Logo";
import { StyledFooter } from "./style";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <StyledFooter>
      <Logo theme="dark" size="small" />
      <p>
        {" "}
        <span>&#169; </span>
        <span>
          created by <Link to="#" className="footer-link">Omar Ashour</Link> - devChallenge.io 2022
        </span>
      </p>
    </StyledFooter>
  );
}

export { Footer };
