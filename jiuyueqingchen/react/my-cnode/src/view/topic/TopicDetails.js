import React from 'react';
import { Card } from 'antd';
import TopicTag from '../../components/TopicTag';
import topicDetails from '../../static/less/topicDetails.module.less';
import 'moment/locale/zh-cn';
import moment from 'moment';
import { FromNow } from '../../components';
import { Link } from 'react-router-dom';
import { homeNav, homeTabs } from '../../router';

moment.locale('zh-cn');

function TopicDetails(props) {
  const { data, loading } = props;
  const { author, author_id, content, create_at, good, id, is_collect, last_reply_at, replies, replu_count, tab, title, top, visit_count } = data;
  const txt = tab && homeNav[homeTabs.indexOf(tab)].txt;
  return (
    <Card
      className={topicDetails['topic-details']}
      title={
        <>
          <div className={topicDetails['title-container']}>
            <TopicTag
              top={top}
              good={good}
            />
            <h1 className={topicDetails['title']}>{title}</h1>
          </div>
          <div className={topicDetails['basic-info']}>
            <span>
              <FromNow create_at={create_at} />
            </span>
            <span>作者 <Link to={`/user/${author && author.loginname}`}>{author && author.loginname}</Link></span>
            <span>{visit_count} 次浏览</span>
            <span>来自 {txt}</span>
          </div>
        </>
      }
      loading={loading}
    >
      <div dangerouslySetInnerHTML={{
        __html: data.content
      }} />
    </Card>
  );
}

export default TopicDetails;