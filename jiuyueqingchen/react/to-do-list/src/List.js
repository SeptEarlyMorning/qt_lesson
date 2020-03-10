import React, { Component } from 'react';

export default class List extends Component {
	render() {
		let { data, changeDone } = this.props;
		let { id, done, content } = data;
		return (
			<li className={`${done ? 'done' : ''}`}>
				<input
					className="check"
					type="checkbox"
					checked={done}
					onChange={({ target }) => {
						changeDone(id, target.checked);
					}}
				/>
				<p className="content">{content}</p>
				<span className="delete"></span>
			</li>
		);
	}
};