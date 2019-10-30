import React, { Component } from 'react';

class Input extends Component {
    // 静态属性
    state = {
        value: ''
    };
    // 箭头函数 this
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            value
        });
    }
    // 单向数据流
    // input 受控组件，完全受 state.value 的控制
    handleSubmit = () => {
        const { value } = this.state;
        const { onReceive } = this.props;
        // 回调函数
        onReceive(value);
        console.log(value);
    };
    render() {
        const { value } = this.state;
        return (
            <>
                <input type="text" value={value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>submit</button>
            </>
        );
    };
};

class CommontList extends Component {
    render() {
        const { clist } = this.props;
        return (
             // <></> 为 <React.Fragment></React.Fragment> 的缩写
            <React.Fragment>
                {
                    clist.map((list, index) => {
                        return (
                            <li key={ index }>{ list.content }</li>
                        )
                    })
                }
            </React.Fragment>
        );
    };
};

class Comment extends Component {
    state = {
        clist: [
            { content: '666' }
        ] // 评论列表
    };
    handleReceiveComment = (value) => {
        console.log('父组件', value);
        // 不可改变数据
        // this.state.clist.pish({ content: value });
        let clist = this.state.clist.slice(0);
        clist.push({ content: value});
        this.setState({
            clist
        });
    };
    render() {
        const { clist } = this.state;
        return (
            <>
                <Input onReceive={this.handleReceiveComment} />
                <CommontList clist={clist} />
            </>
        );
    };
};

export default Comment;