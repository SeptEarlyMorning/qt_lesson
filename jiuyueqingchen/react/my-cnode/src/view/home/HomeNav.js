import React from 'react';
import { Menu } from 'antd';
import { homeNav } from '../../router';
import { NavLink } from 'react-router-dom';

function HomeNav(props) {
  const { activeIndex } = props;
  return (
    <Menu
      mode='horizontal'
      style={{
        borderBottom: '1px solid #d1d1d1'
      }}
      selectedKeys={[activeIndex + '']}
    >{
        homeNav.map((homeNavData, index) => {
          return (
            <Menu.Item
              key={index}>
              <NavLink to={homeNavData.to}>{homeNavData.txt}</NavLink>
            </Menu.Item>
          );
        })
      }
    </Menu>
  );
}

export default HomeNav;