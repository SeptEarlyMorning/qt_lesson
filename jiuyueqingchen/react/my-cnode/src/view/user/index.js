import React, { useEffect } from 'react';
import { UserNav, RightTop, RightBottom, TopicsList } from '../../components';
import UserInfo from './UserInfo';
import { useUserInfo } from '../../store/action';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card } from 'antd';


function UserPage() {
  const getData = useUserInfo();
  const { loginName } = useParams();
  const { data } = useSelector(state => state.userInfo);
  const { avatar_url, create_at, githubUsername, loginname, recent_replies, recent_topics, score } = data;

  useEffect(() => {
    getData(loginName);
  }, [loginName]);

  return (
    <>
      <div className='left'>
        <UserNav />
        <UserInfo
          avatar_url={avatar_url}
          create_at={create_at}
          githubUsername={githubUsername}
          loginname={loginname}
          score={score}
        />
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
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default UserPage;