import { Logo } from '../Logo';
import { StyledHeader } from './style';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <StyledHeader>
      <Link to='/'>
        <Logo />
      </Link>
    </StyledHeader>
  );
}

export { Header };