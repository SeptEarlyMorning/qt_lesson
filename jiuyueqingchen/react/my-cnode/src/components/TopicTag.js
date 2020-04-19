import React from 'react';
import { Tag } from 'antd';

function TopicTag(props) {
  let { top, good, txt, nowTab } = props;
  return (
    <>{
      top || good
        ? <Tag
          className={'tag'}
          visible={top || good}
          color='green'
        >{`${top ? '置顶' : '精华'}`}</Tag>
        : txt
        && nowTab
        && nowTab === 'all'
        && <Tag
          className={'tag'}
        >{txt}</Tag>
    }</>
  );
}

export default TopicTag;