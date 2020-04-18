export default function topicDetails(topicDetails = {
  loading: true,
  data: {},
  isError: false,
  error_msg: '',
}, action) {
  switch (action.type) {
    case 'topicDetails_loading':
      return {
        loading: true,
        data: {},
        isError: false,
        error_msg: '',
      };
    case 'topicDetails_loadOver':
      return {
        loading: false,
        data: action.data,
        isError: false,
        error_msg: '',
      };
    case 'topicDetails_loadError':
      return {
        loading: false,
        data: {},
        isError: true,
        error_msg: action.error_msg
      };
    default:
      return topicDetails;
  }
};