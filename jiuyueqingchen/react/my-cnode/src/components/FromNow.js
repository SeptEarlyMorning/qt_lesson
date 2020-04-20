import React from 'react';
import 'moment/locale/zh-cn';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

moment.locale('zh-cn');

function FromNow(props) {
  let { author, author_id, reply_count, create_at, last_reply_at } = props;
  let { pathname } = useLocation();

  return (
    <>
      {
        reply_count > 0 && pathname === '/'
          ? <Link
            to={`/user/${author.loginname}#${author_id}`}
          >
            <span>最后回复</span>
            <span>{moment(last_reply_at).fromNow()}</span>
          </Link>
          : <>
            <span>发布于</span>
            <span>{moment(create_at).fromNow()}</span>
          </>
      }
    </>
  );
}

export default FromNow;