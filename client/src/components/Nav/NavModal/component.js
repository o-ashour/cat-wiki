import { StyledNavModal } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useLocation } from "react-router-dom";

function NavModal() {
  const { setIsNavOpen } = useContext(UserContext);
  const { pathname } = useLocation();

  function handleClick() {
    setIsNavOpen(false);
  }

  return (
    <StyledNavModal>
      <div className="modal-background"></div>
      <div className="modal">
        <ul className="nav-list">
          {pathname !== "/" ? (
            <Link to="/" onClick={handleClick}>
              <li className="nav-link">HOME</li>
            </Link>
          ) : (
            <li className="nav-link-active">HOME</li>
          )}

          {pathname !== "/topsearch" ? (
            <Link to="/topsearch" onClick={handleClick}>
              <li className="nav-link">TOP BREEDS</li>
            </Link>
          ) : (
            <li className="nav-link-active">TOP BREEDS</li>
          )}
        </ul>
      </div>
    </StyledNavModal>
  );
}

export { NavModal };
