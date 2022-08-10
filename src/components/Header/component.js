import { Logo } from '../Logo';
import { StyledHeader } from './style';

function Header(){
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export { Header };