import { Nav, NavUl, NavLinkk } from './Navigation.styled';
const Navigation = () => {
  return (
    <header>
      <Nav>
        <NavUl>
          <li>
            <NavLinkk to="/">Home</NavLinkk>
          </li>
          <li>
            <NavLinkk to="/movies">Movies</NavLinkk>
          </li>
        </NavUl>
      </Nav>
    </header>
  );
};

export default Navigation;
