import logo from '../assets/svg/CatwikiLogo.svg';
import { StyledLogo } from '../styles/Logo.styled';

function Logo({ theme, size }){
  return(
    <StyledLogo theme={theme} src={logo} size={size} alt='logo' />
  )
};

export default Logo;