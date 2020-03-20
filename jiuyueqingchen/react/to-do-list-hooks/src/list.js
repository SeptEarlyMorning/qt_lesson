import React from 'react';

export default function List(props) {
	const { datas } = props;
	let { id, done, content } = datas;
	return (
		<>
			<li >
				<input
					className="check"
					type="checkbox"
					checked={done}
				/>
				<p
					className="content"
				>{content}</p>
				<span className="delete"></span>
			</li>
		</>
	);
};