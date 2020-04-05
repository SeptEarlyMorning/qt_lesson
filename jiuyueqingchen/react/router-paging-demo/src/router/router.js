import React from 'react';
import { Redirect } from "react-router-dom";
import Inner from '../component/Inner';
import Page404 from '../component/Page404';

const tab = ['all', 'good', 'share', 'ask', 'job', 'dev'];
const router = [{
  path: '/',
  exact: true,
  render: () => <Redirect to="/all/1" />
}, {
  path: '/:tab/:page',
  exact: true,
  render: (props) => {
    const { location } = props;
    const path = location.pathname.split('/');
    if (tab.includes(path[1]) && path[2] > 0) {
      return <Inner />
    }
    return <Page404 />
  }
}, {
  path: '/:tab',
  exact: true,
  render: (props) => {
    const { location } = props;
    const path = location.pathname.split('/');
    return <Redirect to={`/${path[1]}/1`} />
  }
}, {
  path: '',
  exact: false,
  render: () => <Page404 />
}];

export default router;