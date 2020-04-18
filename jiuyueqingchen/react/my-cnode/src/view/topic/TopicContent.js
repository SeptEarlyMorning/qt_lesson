import React from 'react';
import { useSelector } from 'react-redux';

function TopicContent() {
  let { loading, data, isError, error_msg } = useSelector(state => state.topicDetails);
  console.log(loading, data, isError, error_msg);


  return (
    <>
      <div dangerouslySetInnerhtml={{
        __html: data.content
      }} />
    </>
  );
}

export default TopicContent;