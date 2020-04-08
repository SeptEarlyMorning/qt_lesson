import React from 'react';

function getTime(lastReplyTime) {
  lastReplyTime = new Date(lastReplyTime);
  let time;
  let nowTime = new Date();
  let total = (nowTime - lastReplyTime) / 1000; // 总秒数
  if (total >= 60) {
    if ((total /= 60) >= 60) {
      if ((total /= 60) >= 24) {
        if ((total /= 24) >= 30) {
          if ((total /= 360) >= 1) {
            time = `${Math.floor(total)}年前`;
          } else {
            time = `${Math.floor(total * 12)}个月前`;
          }
        } else {
          time = `${Math.floor(total)}天前`;
        }
      } else {
        time = `${Math.floor(total)}个小时前`;
      }
    } else {
      time = `${Math.floor(total)}分钟前`;
    }
  } else {
    time = '几秒前';
  }

  return time;
}

function Item(props) {
  const { data } = props;
  console.log(data);
  const { author, author_id, last_reply_at, good, reply_count, title, visit_count } = data;

  return (<li
    className='list-item'
  >
    <img
      className='author-avatar'
      src={author.avatar_url}
      title={author.loginname}
    />
    <p className='reply-visit-container'>
      <span className='reply-count'>{reply_count}</span>
      <span className='seperator'>/</span>
      <span className='visit-count'>{visit_count}</span>
    </p>
    <p className='list-item-title'>{title}</p>
    <span className='last-reply'>{getTime(last_reply_at)}</span>
  </li>);
}

export default Item;