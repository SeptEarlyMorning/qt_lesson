import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import TopicTag from '../../components/TopicTag';

function TopicContent() {
  const { loading, data, isError, error_msg } = useSelector(state => state.topicDetails);
  const { author, author_id, content, good, id, is_collect, last_reply_at, replies, replu_count, tab, title, top, visit_count } = data;
  console.log(loading, data, isError, error_msg);

  return (
    <Card
      title={
        <>
          <TopicTag
            top={top}
            good={good}
          />
          <h1>{title}</h1>
          <p>
            <span>·来自</span>
            <span>·来自</span>
            <span>·来自</span>
            <span>·来自</span>
            <span>·来自</span>
          </p>
        </>
      }
      loading={loading}
    >
      {/* <Card.Meta
        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      /> */}
      <div dangerouslySetInnerHTML={{
        __html: data.content
      }} />
    </Card>
  );
}

export default TopicContent;