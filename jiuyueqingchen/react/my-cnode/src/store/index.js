import { createStore, combineReducers } from 'redux';
import { topics, topicDetails, userInfo, userCollectTopics } from './reducer';

export default createStore(combineReducers({
  topics,
  topicDetails,
  userInfo,
  userCollectTopics,
}));