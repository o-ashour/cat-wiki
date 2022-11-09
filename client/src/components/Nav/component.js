import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { StyledNav } from "./style";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const { isNavOpen, setIsNavOpen } = useContext(UserContext);
  const { pathname } = useLocation();

  function scrollUp() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // this is to skip the scrolling animation
    });
  }

  function handleClick() {
    !isNavOpen ? setIsNavOpen(true) : setIsNavOpen(false);
    scrollUp();
  }

  return (
    <StyledNav>
      {!isNavOpen ? (
        <FaBars onClick={handleClick} />
      ) : (
        <FaTimes onClick={handleClick} />
      )}
      <ul className="nav-menu">
        {pathname !== "/" ? (
          <Link to="/">
            <li className="nav-link">HOME</li>
          </Link>
        ) : (
          <li className="nav-link-active">HOME</li>
        )}
        {pathname !== "/topsearch" ? (
          <Link to="/topsearch">
            <li className="nav-link">TOP BREEDS</li>
          </Link>
        ) : (
          <li className="nav-link-active">TOP BREEDS</li>
        )}
      </ul>
    </StyledNav>
  );
}

export { Nav };
