import React from 'react';
import rightBottom from '../static/less/rightBottom.module.less';
import phphub_logo from '../static/img/phphub-logo.png';
import ruby_china from '../static/img/ruby-china-20150529.png';
import client_qr_code from '../static/img/client_qr_code.jpg';

function RightBottom() {
  return (
    <div className={rightBottom['right-bottom']}>
      <div className={rightBottom['friendly-community']}>
        <h1>友情社区</h1>
        <div className={rightBottom.content}>
          <img src={phphub_logo} alt='phphub_logo' />
          <img src={ruby_china} alt='ruby_china' />
        </div>
      </div>
      <div className={rightBottom['client-qr-code']}>
        <h1>客户端二维码</h1>
        <div className={rightBottom.content}>
          <img src={client_qr_code} alt='client_qr_code' />
          <p>客户端源码地址</p>
        </div>
      </div>
    </div>
  );
}

export default RightBottom;