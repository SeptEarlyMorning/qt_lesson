import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function toListNav(tab, page) {
  let listNav;
  let pageStart = page - 2 < 1 ? 1 : page - 2;
  let pageEnd = page + 2 > 40 ? 40 : page + 2;
  let liLen = 9;
  let pageCurrent = pageStart;
  for (let i = 0; i < liLen; i++) {
    if (i === 0) {
      if (page === 1) {
        listNav = <li>{'<<'}</li>;
      } else {
        listNav = <li><Link to={`/${tab}/1`}>{'<<'}</Link></li>;
      }
    } else if (i === 1) {
      if (pageStart === 1) {
        break;
      }
      listNav += <li>{'...'}</li>;
    } else if (i === liLen - 2) {
      if (pageEnd === 40) {
        break;
      }
      listNav += <li>{'...'}</li>;
    } else if (i === liLen - 1) {
      if (page === pageEnd) {
        listNav += <li>{'>>'}</li>;
      } else {
        listNav += <li><Link to={`/${tab}/${40}`}>{'>>'}</Link></li>;
      }
    } else {
      if (pageCurrent === page) {
        listNav += <li>{pageCurrent}</li>
      } else {
        listNav += <li><Link to={`/${tab}/${pageCurrent}`}>{pageCurrent}</Link></li>;
      }
      pageCurrent++;
    }
  }
  return listNav;
}

function ListNav(props) {
  const { tab, page } = props;

  return <ul>{
    toListNav(tab, page)
  }</ul>
}

export default ListNav;