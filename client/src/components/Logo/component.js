import logo from "../../assets/svg/CatwikiLogo.svg";
import { StyledLogo } from "./style";

function Logo({ theme }) {
  return <StyledLogo theme={theme} src={logo} alt="logo" />;
}

export { Logo };
