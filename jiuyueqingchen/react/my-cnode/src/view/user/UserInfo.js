import React from 'react';
import { UserOutlined, GithubOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import userInfo from '../../static/less/userInfo.module.less';
import { Link } from 'react-router-dom';
import 'moment/locale/zh-cn';
import moment from 'moment';

moment.locale('zh-cn');

function UserInfo(props) {
  let { avatar_url, create_at, githubUsername, loginname, score } = props;
  return (
    <div
      className={userInfo['user-info-container']}
    >
      <Avatar
        icon={<UserOutlined />}
        size={72}
        src={avatar_url}
        style={{
          border: '1px solid #e1e1e1'
        }}
      />
      <div className={userInfo['user-info']}>
        <span>用户名: {loginname}</span>
        <span>积分: {score}</span>
        <span>注册时间: {moment(create_at).fromNow()}</span>
      </div>
      <div className={userInfo['user-info']}>
        <span>
          <GithubOutlined style={{
            marginRight: '4px'
          }} />
          <a
            rel='noopener noreferrer'
            target='_blank'
            href={`https://github.com/${githubUsername}`
            }>
            https://github.com/{githubUsername}
          </a>
        </span>
        <span>
          <Link to={`/user/${loginname}/collect`}>收藏的话题</Link>
        </span>
      </div>
    </div>
  );
}

export default UserInfo;