import React, { useEffect } from 'react';
import HomeNav from './HomeNav';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RightTop, RightBottom, TopicsList } from '../../components';
import qs from 'qs';
import { useTopicsList } from '../../store/action';
import { homeTabs } from '../../router';

function HomePage() {
  let { loading, data } = useSelector(state => state.topics);
  let { search } = useLocation();
  let { tab, page } = qs.parse(search.slice(1));
  tab = (tab || 'all');
  page = (+page || page || 1);
  let activeIndex = homeTabs.indexOf(tab);

  let getData = useTopicsList();
  useEffect(() => {
    getData(tab, page);// eslint-disable-next-line
  }, [tab, page]);
  return (
    <>
      <div className='left'>
        <HomeNav
          activeIndex={activeIndex}
        />
        <TopicsList
          loading={loading}
          dataSource={data}
          tab={tab}
          nowPage={page}
        />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default HomePage;