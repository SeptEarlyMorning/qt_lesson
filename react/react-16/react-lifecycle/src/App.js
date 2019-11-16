import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import Parent from './Parent';

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    show: false
  };

  componentDidMount() {
    setTimeout(() => {
      let list = this.state.list.slice(0);
      list.push(4);
      this.setState({
        list
      })
    }, 1000)
  }

  render() {
    return (
      <>
      <Parent />
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>卸载</button>
        {
          !this.state.show ? <Child1 list={this.state.list} /> : null
        }
      </>
    );
  }

}

export default App;
