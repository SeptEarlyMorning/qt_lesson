import http from './http.js';
import { useDispatch } from 'react-redux';

function useTopicsList() {
  let dispath = useDispatch();

  return (tab = 'all', page = '', limit = 40, mdrender = true) => {
    dispath({
      type: 'topics_loading'
    });
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res => {
      console.log(res);
      dispath({
        type: 'topics_loadOver',
        data: res.data.data
      });
    });
  }
}

export {
  useTopicsList,
};