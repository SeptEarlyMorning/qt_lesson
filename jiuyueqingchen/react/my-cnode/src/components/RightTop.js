import React from 'react';
import { Button } from 'antd';
import rightTop from '../static/less/rightTop.module.less';
import ad_1 from '../static/img/ad_1.jpg';
import ad_2 from '../static/img/ad_2.jpg';
import ad_3 from '../static/img/ad_3.jpg';

function RightTop() {
  return (
    <div className={rightTop['right-top']}>
      <div className={rightTop['account-no-login']}>
        <p>CNode：Node.js专业中文社区</p>
        <p>您可以 登录 或 注册 , 也可以</p>
        <Button>通过 GitHub 登录</Button>
      </div>
      <div className={rightTop['ad-imgs']}>
        <img src={ad_1} alt='ad_1' />
        <img src={ad_2} alt='ad_2' />
        <img src={ad_3} alt='ad_3' />
      </div>
    </div>
  );
}

export default RightTop;