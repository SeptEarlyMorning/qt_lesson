import React from 'react';
import './static/css/App.css';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Layout, BackTop } from 'antd'
import { route } from './router';
import { Header, Footer } from './components';

function App() {
  console.log(useSelector(state => state.topics));
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content>
        <div className='warp content'>
          <Switch>{
            route.map(item => {
              return (
                <Route
                  key={item.id}
                  path={item.path}
                  exact={item.exact}
                  render={(props) => {
                    return item.render(props);
                  }}
                />
              );
            })
          }</Switch>
        </div>
      </Content>
      <BackTop />
      <Footer />
    </Layout>
  );
}

export default App;
