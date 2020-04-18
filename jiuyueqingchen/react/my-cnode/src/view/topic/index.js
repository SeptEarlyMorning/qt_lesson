import React, { useEffect } from 'react';
import { RightTop, RightBottom } from '../../components';
import TopicContent from './TopicContent';
import { useTopicDetails } from '../../store/action';
import { useParams } from 'react-router-dom';

function TopicPage() {
  let getData = useTopicDetails();
  let { id } = useParams();

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <>
      <div className='left'>
        <TopicContent />
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default TopicPage;