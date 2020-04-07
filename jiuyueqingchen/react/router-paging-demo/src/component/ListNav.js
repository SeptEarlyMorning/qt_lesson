import React from 'react';
import { Link } from 'react-router-dom';

function toListNav(tab, page) {
  page /= 1;
  let liLen = 9;
  let listNav = [];
  let pageStart, pageEnd;

  if (page - 2 <= 1) {
    pageStart = 1;
  } else {
    if (page + 2 >= 40) {
      pageStart = 40 - 4;
    } else {
      pageStart = page - 2;
    }
  }
  pageEnd = pageStart + 4;
  let pageCurrent = pageStart;
  for (let i = 0; i < liLen; i++) {
    if (i === 0) {
      if (page === 1) {
        listNav.push(<li key={i} className='noLink'>{'«'}</li>);
      } else {
        listNav.push(<li key={i}><Link to={`/${tab}/1`}>{'«'}</Link></li>);
      }
    } else if (i === 1) {
      if (pageStart === 1) {
        continue;
      }
      listNav.push(<li key={i} className='noLink'>···</li>);
    } else if (i === liLen - 2) {
      if (pageEnd === 40) {
        continue;
      }
      listNav.push(<li key={i} className='noLink'>···</li>);
    } else if (i === liLen - 1) {
      if (page === pageEnd) {
        listNav.push(<li key={i} className='noLink'>{'»'}</li>);
      } else {
        listNav.push(<li key={i}><Link to={`/${tab}/${40}`}>{'»'}</Link></li>);
      }
    } else {
      if (pageCurrent === page) {
        listNav.push(<li key={i} className='noLink page'>{pageCurrent}</li>);
      } else {
        listNav.push(<li key={i}><Link to={`/${tab}/${pageCurrent}`}>{pageCurrent}</Link></li>);
      }
      pageCurrent++;
    }
  }
  return listNav;
}

function ListNav(props) {
  const { tab, page } = props;

  return <ul className='list-nav'>{
    toListNav(tab, page).map((item) => {
      return item;
    })
  }</ul>
}

export default ListNav;