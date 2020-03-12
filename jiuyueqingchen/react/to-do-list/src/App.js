import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Lists from './Lists';
import Schedule from './Schedule.js';

class App extends Component {
  state = {
    datas: [{
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
    }]
  };

  changeDone = (id, done) => {
    let { datas } = this.state;
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

  addList = (content) => {
    let { datas } = this.state;
    datas.push({
      id: Date.now(),
      done: false,
      content: content
    })
    this.setState({
      datas: datas
    })
  };

  deleteList = (id) => {
    let { datas } = this.state;
    this.setState({
      datas: datas.filter(data => data.id !== id)
    });
  };

  changeList = (id, content) => {
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

  deleteAllDoneLists = () => {
    let { datas } = this.state;
    this.setState({
      datas: datas.filter((data) => data.done === false)
    });
  };

  render() {
    let { datas } = this.state;

    return (
      <div className="to-do-list">
        <h1 className="title">todolist</h1>
        <Input
          addList={this.addList}
        />
        <Lists
          datas={datas}
          changeDone={this.changeDone}
          deleteList={this.deleteList}
          changeList={this.changeList}
        />
        <div className=""></div>
        <Schedule
          datas={datas}
          deleteAllDoneLists={this.deleteAllDoneLists}
        />
      </div>
    );
  }
}

export default App;
