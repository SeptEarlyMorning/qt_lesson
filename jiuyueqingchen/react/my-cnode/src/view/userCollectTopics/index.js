import React, { useEffect } from 'react';
import { UserNav, RightTop, RightBottom, TopicsList } from '../../components';
import { useParams } from 'react-router-dom';
import { useUserCollectTopics } from '../../store/action';
import { useSelector } from 'react-redux';


function UserCollectTopicsPage() {
  const getData = useUserCollectTopics();
  const { loginName } = useParams();
  const { loading, data } = useSelector(state => state.userCollectTopics);

  useEffect(() => {
    getData(loginName); // eslint-disable-next-line
  }, [loginName]);

  return (
    <>
      <div className='left'>
        <UserNav
          isCollect={true}
        />
        <TopicsList
          dataSource={data}
          loading={loading}
        />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default UserCollectTopicsPage;