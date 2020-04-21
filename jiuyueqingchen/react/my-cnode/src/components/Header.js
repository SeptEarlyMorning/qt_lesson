import React from 'react';
import logo from '../static/img/cnodejs_light.svg';
import { Layout, Menu, Row, Col } from 'antd';
import { nav } from '../router';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { Header } = Layout;
  const { pathname } = useLocation();
  let activeIndex = nav.findIndex(navData => pathname === navData.to);

  return (
    <Header style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: 'auto',
      padding: 0,
    }}>
      <div className='warp'>
        <Row>
          <Col xs={24} sm={6}>
            <div className='logo'>
              <img src={logo} alt='cnode' width='128px' />
            </div>
          </Col>
          <Col xs={24} sm={18} >
            <Menu
              theme='dark'
              mode='horizontal'
              selectedKeys={[activeIndex + '']}
              className='nav'
            >{
                nav.map((navData, index) => {
                  return (
                    <Menu.Item key={index}>
                      <Link to={navData.to}>{navData.txt}</Link>
                    </Menu.Item>
                  );
                })
              }
            </Menu>
          </Col>
        </Row>
      </div>
    </Header>
  );
}

export default Header;