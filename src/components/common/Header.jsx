import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F1582A' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/employment" activeStyle={activeStyle}>
        Employment
      </NavLink>
      {' | '}
      <NavLink to="/projects" activeStyle={activeStyle}>
        Projects
      </NavLink>
      {' | '}
      <NavLink to="/profiles" activeStyle={activeStyle}>
        Profiles
      </NavLink>
    </nav>
  );
};

export default Header;
