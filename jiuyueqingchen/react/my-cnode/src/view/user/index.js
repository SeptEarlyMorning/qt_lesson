import React, { useEffect } from 'react';
import { UserNav, RightTop, RightBottom } from '../../components';
import UserInfo from './UserInfo';
import { useUserInfo } from '../../store/action';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserPage() {
  const { loginName } = useParams();
  let getData = useUserInfo();
  const { data, loading } = useSelector(state => state.userInfo);
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
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default UserPage;