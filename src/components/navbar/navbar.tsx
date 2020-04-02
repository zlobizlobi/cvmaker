import React from 'react';
import { Nav, NavList, NavLink } from './styles';

export const Navbar: React.FC = () => (
  <Nav>
    <NavLink to="/">Show Catalog</NavLink>
    <NavList>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shows">Shows</NavLink>
    </NavList>
  </Nav>
);
