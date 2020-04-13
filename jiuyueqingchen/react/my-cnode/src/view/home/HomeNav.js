import React from 'react';
import { Menu } from 'antd';
import { homeNav } from '../../router';
import { NavLink } from 'react-router-dom';

function HomeNav() {
  return (
    <Menu
      mode='horizontal'
    >{
        homeNav.map((homeNavData, index) => {
          return (
            <Menu.Item key={index}>
              <NavLink to={homeNavData.to}>{homeNavData.txt}</NavLink>
            </Menu.Item>
          );
        })
      }
    </Menu>
  );
}

export default HomeNav;