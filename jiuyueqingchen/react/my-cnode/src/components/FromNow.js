import React from 'react';
import 'moment/locale/zh-cn';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

moment.locale('zh-cn');

function FromNow(props) {
  let { reply_count, create_at, last_reply_at } = props;
  let { pathname } = useLocation();

  return (
    <>
      {
        reply_count > 0 && pathname === '/'
          ? <>
            <span>最后回复</span>
            <span>{moment(last_reply_at).fromNow()}</span>
          </>
          : (create_at
            ? <>
              <span>发布于</span>
              <span>{moment(create_at).fromNow()}</span>
            </>
            : <>
              <span>最后回复</span>
              <span>{moment(last_reply_at).fromNow()}</span>
            </>)
      }
    </>
  );
}

export default FromNow;