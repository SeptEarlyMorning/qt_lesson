import React from 'react';

/**
 * { tag: 'div'}
 * 浏览器：react-dom div
 * 服务器：字符串的 html
 */
class Header extends React.Component {
    render() {
        return (
            <div>
                hello server
                <button onClick={this.buy}></button>
            </div>
        )
    }
}