// import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import homeReducer from '../pages/home/store/reducer';

// fromJS({ home: , default: })
const reducer = combineReducers({
    home: homeReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

// default export
// import .. from './index.js'
export default store;