import React, { Component } from 'react';

export default class Input extends Component {
	state = {
		val: ''
	};
	render() {
		let { val } = this.state;
		let { addList } = this.props;
		return (
			<input
				className="new-list"
				placeholder="What needs to be done?"
				autoComplete="off"
				type="text"
				value={val}
				onChange={({ target }) => {
					this.setState({
						val: target.value
					});
				}}
				onKeyUp={({ keyCode }) => {
					console.log(keyCode);
					if (keyCode === 13) {
						if (!val.trim()) {
							alert('请输入些内容');
						} else {
							addList(val);
							this.setState({
								val: ''
							});
						}
					}
				}}
			/>
		);
	};
};
