import React from 'react';
import { UserNav, RightTop, RightBottom } from '../../components';

function UserCollectTopicsPage() {
  return (
    <>
      <div className='left'>
        <UserNav
          isCollect={true}
        />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default UserCollectTopicsPage;