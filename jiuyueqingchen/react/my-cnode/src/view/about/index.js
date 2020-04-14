import React from 'react';
import { RightTop, RightBottom } from '../../components';

function AboutPage() {
  return (
    <>
      <div className='left'>
        关于
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default AboutPage;