import Logo from './Logo';
import { StyledHeader } from './styles/Header.styled';

function Header(){
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;