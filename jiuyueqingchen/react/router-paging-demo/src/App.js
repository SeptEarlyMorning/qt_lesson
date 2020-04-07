import React from 'react';
import Nav from './component/Nav';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import router from './router/router';

// 仿 cnode 主页，react + react-router + axios
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>{
        router.map((item, index) => <Route
          path={item.path}
          exact={item.exact}
          render={item.render}
          key={index}
        />)
      }</Switch>
    </div>
  );
}

export default App;
