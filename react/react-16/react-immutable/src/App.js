import React from 'react';
import logo from './logo.svg';
import immutable from 'immutable';
import './App.css';

// 可变
let a = [0, 1, 2];
a.push(3);
// 不可变
let immutableArr = immutable.fromJS(
  [2, 3, 4]
);
immutableArr.push(5);
console.log(immutableArr.toJS());

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
};
let imObj = immutable.fromJS(obj);
// obj.b && obj.b.c
console.log(imObj.getIn(['b', 'c'], 'default'));
let imObj1 = imObj.setIn(['d', 'e'], 'ee');
let obj1 = {
  ...obj,
  b: 2
};
console.log(obj1);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
