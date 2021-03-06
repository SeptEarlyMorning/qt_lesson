import http from './http.js';
import { useDispatch } from 'react-redux';

function useTopicsList() {
  let dispath = useDispatch();

  return (tab = 'all', page = '', limit = 40, mdrender = true) => {
    dispath({
      type: 'topics_loading'
    });
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res => {
      dispath({
        type: 'topics_loadOver',
        data: res.data.data
      });
    });
  }
}

function useTopicDetails() {
  let dispath = useDispatch();

  return (id) => {
    dispath({
      type: 'topicDetails_loading'
    });
    http.get(`/topic/${id}`).then(res => {
      dispath({
        type: 'topicDetails_loadOver',
        data: res.data.data
      })
    }).catch(err => {
      dispath({
        type: 'topicDetails_loadError',
        error_msg: err.response.data.error_msg
      })
    });
  };
}

function useUserInfo() {
  let dispath = useDispatch();

  return (loginname) => {
    dispath({
      type: 'userInfo_loading'
    });
    http.get(`/user/${loginname}`).then(res => {
      dispath({
        type: 'userInfo_loadOver',
        data: res.data.data
      });
    }).catch(err => {
      dispath({
        type: 'userInfo_loadError',
        error_msg: err.response.data.error_msg
      });
    });
  };
}

function useUserCollectTopics() {
  let dispath = useDispatch();

  return (loginname) => {
    dispath({
      type: 'userCollectTopics_loading'
    });
    http.get(`/topic_collect/${loginname}`).then(res => {
      dispath({
        type: 'userCollectTopics_loadOver',
        data: res.data.data
      });
    })
  };
}

export {
  useTopicsList,
  useTopicDetails,
  useUserInfo,
  useUserCollectTopics,
};