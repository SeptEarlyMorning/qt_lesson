import React from 'react';
import HomeNav from './HomeNav';
import { RightTop, RightBottom } from '../../components';
import HomeContent from './HomeContent';

function HomePage() {
  return (
    <>
      <div className='left'>
        <HomeNav />
        <HomeContent />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default HomePage;