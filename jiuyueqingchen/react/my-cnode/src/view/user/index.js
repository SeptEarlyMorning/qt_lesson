import React, { useEffect } from 'react';
import { UserNav, RightTop, RightBottom, TopicsList } from '../../components';
import UserInfo from './UserInfo';
import { useUserInfo } from '../../store/action';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Result, Button } from 'antd';


function UserPage() {
  const getData = useUserInfo();
  const { loginName } = useParams();
  const { data, loading, isError, error_msg } = useSelector(state => state.userInfo);
  const { avatar_url, create_at, githubUsername, loginname, recent_replies, recent_topics, score } = data;

  useEffect(() => {
    getData(loginName); // eslint-disable-next-line
  }, [loginName]);

  return (
    <>
      <div className='left'>
        {
          isError
            ? <Result
              status={404}
              title='404'
              subTitle={error_msg}
              extra={<Button type="primary"><Link to='/'>回到主页</Link></Button>}
            />
            : <>
              <UserNav />
              <UserInfo
                loading={loading}
                avatar_url={avatar_url}
                create_at={create_at}
                githubUsername={githubUsername}
                loginname={loginname}
                score={score}
              />
              {
                recent_topics &&
                <Card
                  className='card'
                  title={`最近创建的话题`}
                  size='small'
                  headStyle={{
                    padding: '5px 20px',
                    marginBottom: 0,
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#666'
                  }}
                  bodyStyle={{
                    padding: 0,
                  }}
                >
                  <TopicsList
                    dataSource={recent_topics}
                  />
                </Card>
              }
              {
                recent_replies &&
                <Card
                  className='card'
                  title={`最近参与的话题`}
                  size='small'
                  headStyle={{
                    padding: '5px 20px',
                    marginBottom: 0,
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#666'
                  }}
                  bodyStyle={{
                    padding: 0,
                  }}
                >
                  <TopicsList
                    dataSource={recent_replies}
                  />
                </Card>
              }
            </>
        }
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default UserPage;