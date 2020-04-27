export default function userInfo(userInfo = {
  loading: true,
  data: {},
  isError: false,
  error_msg: '',
}, action) {
  switch (action.type) {
    case 'userInfo_loading':
      return {
        loading: true,
        data: {},
        isError: false,
        error_msg: '',
      };
    case 'userInfo_loadOver':
      return {
        loading: false,
        data: action.data,
        isError: false,
        error_msg: '',
      };
    case 'userInfo_loadError':
      return {
        loading: false,
        data: {},
        isError: true,
        error_msg: action.error_msg,
      };
    default:
      return userInfo;
  }
}