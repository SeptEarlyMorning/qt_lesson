import React from 'react';
import Nav from './component/Nav';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import router from './router/router';

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
