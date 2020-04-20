import React from 'react';
import { Comment, Card, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../components/FromNow';

function TopicComment(props) {
  const { replies, loading } = props;
  console.log(replies);

  return (
    <Card
      loading={loading}
      title={`回复`}
    >
      <List
        dataSource={replies}
        renderItem={comment => {
          const { author, content, create_at } = comment;
          const { avatar_url, loginname } = author;
          return (
            <li>
              <Comment
                author={loginname}
                avatar={
                  <Avatar
                    shape='square'
                    icon={<UserOutlined />}
                    src={avatar_url}
                    alt={loginname}
                  />
                }
                content={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  >
                  </div>
                }
                datetime={<FromNow create_at={create_at} />}
              >
                {/* <div dangerouslySetInnerHTML={{
              __html: item.content
            }}></div> */}
              </Comment>
            </li>
          );
        }}
      />
    </Card>
  );
}

export default TopicComment;