import React, { Component, createRef } from 'react';

export default class List extends Component {
	state = {
		editStatus: false,
		editVal: ''
	};

	// 获取原生 DOM
	input = createRef();

	componentDidUpdate(prevProps, prevState) {
		// 上一次编辑状态为 false，这次编辑状态为 true。即进入编辑状态
		if (prevState.editStatus === false && this.state.editStatus === true) {
			this.input.current.focus();
		}
	};

	render() {
		let { data, changeDone, deleteList, changeList } = this.props;
		let { id, done, content } = data;
		let { editStatus, editVal } = this.state;

		return (
			<li className={`${done ? 'done ' : ''}${editStatus ? 'edit' : ''}`}>
				<input
					className="check"
					type="checkbox"
					checked={done}
					onChange={({ target }) => {
						changeDone(id, target.checked);
					}}
				/>
				<p
					className="content"
					onDoubleClick={() => {
						this.setState({
							editStatus: true,
							editVal: content
						});
					}}
				>{content}</p>
				<span
					className="delete"
					onClick={() => {
						deleteList(id)
					}}
				></span>
				<div className="edit-content">
					<input
						className="editInput"
						type="text"
						value={editVal}
						ref={this.input}
						onBlur={() => {
							this.setState({
								editStatus: false
							});
							if (editVal) {
								changeList(id, editVal);
							}
						}}
						onChange={({ target }) => {
							this.setState({
								editVal: target.value
							});
						}}
					/>
				</div>
			</li>
		);
	}
};