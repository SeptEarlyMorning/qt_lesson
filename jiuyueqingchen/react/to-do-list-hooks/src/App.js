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

  const changeDone = (id, done) => {
    for (const data of datas) {
      if (data.id === id) {
        data.done = done;
        break;
      }
    }
    this.setState({
      datas: datas
    });
  };

  const addList = (content) => {
    datas.push({
      id: Date.now(),
      done: false,
      content: content
    });
    setDatas([...datas]);
  };

  const deleteList = (id) => {
    let { datas } = this.state;
    this.setState({
      datas: datas.filter(data => data.id !== id)
    });
  };

  const changeList = (id, content) => {
    let { datas } = this.state;
    for (const data of datas) {
      if (data.id === id) {
        data.content = content;
      }
    }
    this.setState({
      datas
    });
  };

  const deleteAllDoneLists = () => {
    let { datas } = this.state;
    this.setState({
      datas: datas.filter((data) => data.done === false)
    });
  };

  return (
    <div className="to-do-list">
      <h1 className="title">todolist</h1>
      <Input
        addList={addList}
      />
      <Lists
        datas={datas}
        changeDone={changeDone}
        deleteList={deleteList}
        changeList={changeList}
      />
      <div className=""></div>
      <Schedule
        datas={datas}
        deleteAllDoneLists={deleteAllDoneLists}
      />
    </div>
  );
}



export default App;