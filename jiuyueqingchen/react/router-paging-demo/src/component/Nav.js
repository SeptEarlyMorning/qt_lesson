import React from 'react';
import navDatas from '../router/nav';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">{
      navDatas.map((navData) => { 
        return <NavLink
          key={navData.id}
          to={navData.path}
          exact={navData.exact}
          activeClassName='select'
        >{navData.txt}</NavLink>
      })
    }</nav>
  );
}

export default Nav;