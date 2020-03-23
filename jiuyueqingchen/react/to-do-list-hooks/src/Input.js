import React, { useState} from 'react';

export default function Input(props) {
	const { addList } = props;
	const [val, setVal] = useState();

	return (
		<input
			className="new-list"
			type="text"
			placeholder="What needs to be done?"
			autoComplete="off"
			value={val}
			onChange={({ target }) => {
				setVal(target.value);
				console.log(val);
			}}
			onKeyUp={({ keyCode }) => {
				if (keyCode === 13) {
					if (!val.trim()) {
						alert('请输入些内容');
					} else {
						addList(val);
						setVal('');
					}
				}
			}}
		/>
	);
}