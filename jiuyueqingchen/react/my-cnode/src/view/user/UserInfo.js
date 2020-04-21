import React from 'react';
import { Card } from 'antd';

function UserInfo() {
  const tabList = [{
    key: 0,
    tab: <p>1</p>
  }, {
    key: 1,
    tab: <p>1</p>
  }, {
    key: 2,
    tab: <p>1</p>
  },]
  return (
    <Card
      tabList={tabList}
    >

    </Card>
  );
}

export default UserInfo;