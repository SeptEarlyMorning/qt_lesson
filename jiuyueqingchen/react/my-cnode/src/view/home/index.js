import React from 'react';
import HomeNav from './HomeNav';
import RightTop from '../../components/RightTop';
import RightBottom from '../../components/RightBottom';

function HomePage() {
  return (
    <>
      <div className='left'>
        <HomeNav />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default HomePage;