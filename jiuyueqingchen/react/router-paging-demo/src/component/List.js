import React from 'react';

function List(props) {
  const { data } = props;
  
  return <li 
  >{data.title}</li>;
}

export default List;