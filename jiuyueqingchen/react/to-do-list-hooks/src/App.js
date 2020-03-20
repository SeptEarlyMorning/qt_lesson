import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Lists from './Lists';
import Schedule from './Schedule';

function App() {
  const [datas, setDatas] = useState([{
    id: 0,
    done: false,
    content: '内容1'
  }, {
    id: 1,
    done: false,
    content: '内容2'
  }, {
    id: 2,
    done: true,
    content: '内容3'
  }]);

  return (
    <div className="to-do-list">
      <h1 className="title">toDoList</h1>
      <Input setDatas={setDatas} />
      <Lists datas={datas} />
      <Schedule />
    </div>
  );
}



export default App;