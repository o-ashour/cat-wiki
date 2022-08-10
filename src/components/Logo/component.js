import logo from '../../assets/svg/CatwikiLogo.svg';
import { StyledLogo } from './style';

function Logo({ theme, section }){
  return(
    <StyledLogo theme={theme} src={logo} section={section} alt='logo' />
  )
};

export { Logo };