export default function userCollectTopics(userCollectTopics = {
  loading: true,
  data: [],
  isError: false,
  error_msg: '',
}, action) {
  switch (action.type) {
    case 'userCollectTopics_loading':
      return {
        loading: true,
        data: [],
        isError: false,
        error_msg: '',
      };
    case 'userCollectTopics_loadOver':
      return {
        loading: false,
        data: action.data,
        isError: false,
        error_msg: '',
      };
    case 'userCollectTopics_loadError':
      return {
        loading: false,
        data: [],
        isError: true,
        error_msg: action.error_msg
      };
    default:
      return userCollectTopics;
  }
};