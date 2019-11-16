import React, { Component } from 'react';

class Child1 extends Component {
    state = {
        data: 1
    };
    componentWillMount() {
        const { list } = this.props;
        console.log('componentWillMount');
        this.setState({
            list
        })
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interVal = setInterval(() => {
            console.log(123456);
            const list = this.state.list.slice(0);
            list.push(10);
            this.setState({
                list
            })
        }, 1000)
    }

    update = () => {
        this.setState({
            data: this.state.data + 1
        })
    }

    // props
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps, this.props);
        // this. 上一次的
        let list = this.state.list.slice(0);
        list.splice(0, 3, ...(nextProps.list));
        this.setState({
            list
        });
    }

    // 性能优化
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        // if (this.state.data < 3) {
        //     return false;
        // }
        return true;
    }

    componentWillUnmount() {
        clearInterval(this.interVal);
    }

    render() {
        return (
            <div onClick={this.update}>child1 : {this.state.data}
                <ul>
                    {
                        this.state.list.map(el => {
                            return (
                                <li>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Child1;