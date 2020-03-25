import React, { useState, useEffect, useRef } from 'react';

export default function List(props) {
	const { datas, func } = props;
	const { id, done, content } = datas;
	const { changeDone, deleteList, changeList } = func;
	const [editStatus, setEditStatus] = useState(false);
	const [editVal, setEditVal] = useState('');
	const input = useRef();

	useEffect(() => {
		input.current.focus();
	}, [editStatus]);

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
					setEditStatus(true);
					setEditVal(content);
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
					ref={input}
					onBlur={() => {
						setEditStatus(false);
						if (editVal) {
							changeList(id, editVal);
						}
					}}
					onChange={({ target }) => {
						setEditVal(target.value);
					}}
				/>
			</div>
		</li>
	);
};