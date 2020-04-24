import React, { createElement } from 'react';
import { Comment, Card, List, Avatar, Tooltip } from 'antd';
import { UserOutlined, LikeOutlined, LikeFilled } from '@ant-design/icons';
import FromNow from '../../components/FromNow';
import { Link } from 'react-router-dom';
import topicComment from '../../static/less/topicComment.module.less';

const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' }); }
  }
}

function TopicComment(props) {
  const { reply_count, replies, loading } = props;
  console.log(replies);

  return (
    <Card
      className={topicComment['comment-container']}
      size='small'
      loading={loading}
      headStyle={{
        fontSize: '16px',
        padding: '0 24px'
      }}
      bodyStyle={{
        padding: 0
      }}
      title={<h1 className={topicComment['title']}>{reply_count} 回复</h1>}
    >
      <List
        dataSource={replies}
        renderItem={(comment, index) => {
          const { author, content, id, create_at, is_uped, ups } = comment;
          const { avatar_url, loginname } = author;
          // const [likes, useLikes] = useState(ups.length);
          // let likes = ups.length,
          //   isLike = is_uped;
          const like = () => {
            // useLikes(likes + 1)
            // isLike = true;
          };

          const actions = [
            <span key="comment-basic-like">
              <Tooltip title="Like">
                {createElement(is_uped ? LikeFilled : LikeOutlined, {
                  onClick: like,
                })}
              </Tooltip>
              <span className="comment-action">{ups.length}</span>
            </span>,
            <span key="comment-basic-reply-to">回复</span>,
          ];

          return (
            <li
              className={topicComment['item']}
            >
              <p id={id} className={topicComment['anchor']} />
              <Comment
                actions={actions}
                author={
                  <Link to={`/user/${loginname}`}>{loginname}</Link>
                }
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
                datetime={
                  <p
                    className={topicComment['anchor-link']}
                    onClick={() => {
                      scrollToAnchor(id);
                    }}
                  >{index + 1} 楼 • <FromNow create_at={create_at} /></p>
                }
              >
              </Comment>
            </li>
          );
        }}
      />
    </Card>
  );
}

export default TopicComment;