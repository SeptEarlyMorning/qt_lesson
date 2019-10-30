import React from 'react';
// ui
import ReactDOM from 'react-dom';
// 平台相关 react-native
import './index.css';
// import App from './App';
import App from './Comment'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
