export default function userInfo(userInfo = {
  loading: true,
  data: {},
}, action) {
  switch (action.type) {
    case 'userInfo_loading':
      return {
        laoding: false,
        data: {},
      };
    case 'userInfo-loadOver':
      return {
        loading: true,
        data: action.data
      };
    default:
      return userInfo;
  }
}