import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
let isLogin = true;

class PricateRoute extends Component {
    render() {
        const props = this.props;
        return (
            <div>
                {isLogin ? <Route {...props} /> : 'unAuth'}
            </div>
        )
    }
}

function PriCom() {
    return (
        <div>私密</div>
    )
}

function Guanzhu() {
    return (
        <div>
            关注
        </div>
    );
}

function Fe() {
    return (
        <div>
            前端
        </div>
    );
}

function Rd() {
    return (
        <div>
            后端
        </div>
    );
}

function Home() {
    return (
        <div>
            <div>
                <Link to="/home">首页</Link>
                <Link to="/home/guanzhu">关注</Link>
                <Link to="/home/fe">前端</Link>
                <Link to="/home/rd">后端</Link>
                <Link to="/home/private">私密</Link>
            </div>
            <div className="main">
                <Route path="/home/guanzhu" component={Guanzhu} />
                <Route path="/home/fe" component={Fe} />
                <Route path="/home/rd" component={Rd} />
                <PricateRoute path="/home/private" component={PriCom} />
            </div>
        </div>
    );
}

function Me() {
    return (
        <div>Me</div>
    );
}

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <Route path="/home" component={Home}></Route>
                    {isLogin && <Route path="/me" component={Me}></Route>}
                </div>
                <div className="footer">
                    <Link to="/home">home</Link>
                    {isLogin && <Link to="/me">me</Link>}
                </div>
            </div>
        );
    }
}

export default Layout;