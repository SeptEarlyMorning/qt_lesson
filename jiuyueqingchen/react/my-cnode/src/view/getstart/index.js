import React from 'react';
import { RightTop, RightBottom } from '../../components';

function GetStartPage() {
  return (
    <>
      <div className='left'>
        新手入门
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default GetStartPage;