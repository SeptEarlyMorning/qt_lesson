import React from 'react';
import { List } from 'antd';

function HomeContent() {
  return (
    <List
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
    />
  );
}

export default HomeContent;