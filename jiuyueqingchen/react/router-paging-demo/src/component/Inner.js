import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData, cancel } from '../http/http';
import List from './List';
import ListNav from './ListNav';

function Inner() {
  const { tab, page } = useParams();
  const [datas, setDatas] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    try {
      setIsLoad(true);
      getData(tab, page, setDatas, setIsLoad);
    } catch (err) {
      console.log(err);
    }
    return (() => {
      cancel();
    });
  }, [tab, page]);

  return (<>{isLoad ?
    '加载中' :
    <>
      <List datas={datas} />
      <ListNav
        tab={tab}
        page={page}
      />
    </>}
  </>);
}


export default Inner;