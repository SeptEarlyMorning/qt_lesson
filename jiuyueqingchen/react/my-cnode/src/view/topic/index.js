import React, { useEffect } from 'react';
import { RightTop, RightBottom } from '../../components';
import TopicDetails from './TopicDetails';
import { useTopicDetails } from '../../store/action';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopicComment from './TopicComment';

function TopicPage() {
  let getData = useTopicDetails();
  let { id } = useParams();
  const { loading, data, isError, error_msg } = useSelector(state => state.topicDetails);
  const { replies, reply_count } = data;

  console.log(data);
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <>
      <div className='left'>
        <TopicDetails
          data={data}
          loading={loading}
        />
        {
          reply_count && reply_count > 0 &&
          <TopicComment
            reply_count={reply_count}
            replies={replies}
            loading={loading}
          />
        }
      </div>
      <div className='right'>
        <RightTop />
        <RightBottom />
      </div>
    </>
  );
}

export default TopicPage;