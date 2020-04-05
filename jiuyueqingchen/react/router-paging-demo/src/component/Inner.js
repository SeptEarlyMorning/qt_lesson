import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../http/http';
import List from './List';

function Inner() {
  const { tab, page } = useParams();
  const [datas, setDatas] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  
  // useEffect(() => {
  // }, [isLoad]);

  useEffect(() => {
    console.log(isLoad);
    setIsLoad(true);
    console.log(isLoad);
    if (isLoad) {
      getData(tab, page).then((res) => {
        setIsLoad(false);
        setDatas(res.data.data);
      });  
    }
  }, [tab, page]);

  return ( 
    <ul>{isLoad ? '加载中' :
      datas.map((data) => <List key={data.id} data={data} />)
    }</ul>
  );
}


export default Inner;