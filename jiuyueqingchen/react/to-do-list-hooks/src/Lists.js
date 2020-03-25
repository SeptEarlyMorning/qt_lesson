import React from 'react';
import List from './List';

export default function Lists(props) {
	const { datas, ...func } = props;

	return (
		<ul className="lists">{
			datas.map((data) => <List datas={data} key={data.id} func={func} />)
		}</ul>
	);
}