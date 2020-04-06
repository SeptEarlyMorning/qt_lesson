import React from 'react';
import Item from './Item';

function List(props) {
  const { datas } = props;

  return <ul
  >{datas.map((data) => <Item key={data.id} data={data} />)}</ul>;
}

export default List;