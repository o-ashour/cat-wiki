import { Logo } from "../Logo";
import { StyledHeader } from "./style";
import { Nav } from "../Nav/component";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export { Header };
