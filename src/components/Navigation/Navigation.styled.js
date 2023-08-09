import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 50px;
`;
export const NavUl = styled.ul`
  display: flex;
`;

export const NavLinkk = styled(NavLink)`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    color: black;
    border-radius: 5px;
  }
  &.active {
    color: orange;
  }
`;
