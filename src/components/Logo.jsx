import logo from '../assets/svg/CatwikiLogo.svg';
import { StyledLogo } from '../styles/Logo.styled';

function Logo({ theme }){
  return(
    <StyledLogo theme={theme} src={logo} alt='logo' />
  )
};

export default Logo;