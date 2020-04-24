import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <>
      <div className='left'>
        <Result
          status="404"
          title="404"
          subTitle="页面找不到啦！"
          extra={<Button type="primary"><Link to='/'>回到主页</Link></Button>}
        />
      </div>
    </>
  );
}

export default Page404;