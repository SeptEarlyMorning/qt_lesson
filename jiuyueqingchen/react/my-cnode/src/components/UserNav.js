import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import userNav from '../static/less/userNav.module.less';

function UserNav(props) {
  console.log(props);
  const { isCollect } = props;
  const { loginName } = useParams();

  return (
    <h1 className={userNav['user-nav']}>
      <Link to='/'>主页</Link>
      <span>/</span>
      {
        isCollect
          ? (<>
            <Link to={`/user/${loginName}`}>{loginName}</Link>
            <span>/</span>
            <span>{loginName} 收藏的话题</span>
          </>)
          : <span>{loginName}</span>
      }
    </h1>
  );
}

export default UserNav;