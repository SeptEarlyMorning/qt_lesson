import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Lists from './Lists';
import Schedule from './Schedule';

function App() {
  const [datas, setDatas] = useState()
  return (
    <div className="to-do-list">
      <h1 className="title">toDoList</h1>
      <Input />
      <Lists />
      <Schedule />
    </div>
  );
}



export default App;