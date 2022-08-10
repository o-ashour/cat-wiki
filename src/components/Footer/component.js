import { Logo } from "../Logo";
import { StyledFooter } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Logo theme="dark" size="small"/>
      <p> <span>&#169; </span><span>created by <a href="#">Omar Ashour</a> - devChallenge.io 2022</span></p>
    </StyledFooter>
  )
}

export { Footer };
