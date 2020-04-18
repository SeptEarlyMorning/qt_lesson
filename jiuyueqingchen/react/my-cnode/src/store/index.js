import { createStore, combineReducers } from 'redux';
import { topics, topicDetails } from './reducer';

export default createStore(combineReducers({
  topics,
  topicDetails,
}));