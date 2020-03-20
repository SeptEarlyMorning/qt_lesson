import React from 'react';

export default function Input(props) {
	const {setDatas} = props;

	return (
		<input
			className="new-list"
			type="text"
			placeholder="What needs to be done?"
			autoComplete="off"
			onKeyUp={({ keyCode, target }) => {
				if (keyCode === 13) {
					if (target.value.trim()) {
					} else {
						alert('请输入些东西');
					}
				}
			}}
		/>
	);
}