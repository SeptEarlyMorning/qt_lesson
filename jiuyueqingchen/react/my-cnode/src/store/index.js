import { createStore, combineReducers } from 'redux';
import { topics, topicDetails, userInfo } from './reducer';

export default createStore(combineReducers({
  topics,
  topicDetails,
  userInfo,
}));