import React from 'react';
import { RightTop, RightBottom } from '../../components';

function Page404() {
  return (
    <>
      <div className='left'>
        页面飞走了
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default Page404;