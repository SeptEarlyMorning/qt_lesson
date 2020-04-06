import React from 'react';

function Item(props) {
  const { data } = props;

  return <li
  >{data.title}</li>;
}

export default Item;