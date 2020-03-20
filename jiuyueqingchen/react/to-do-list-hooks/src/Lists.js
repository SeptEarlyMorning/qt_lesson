import React from 'react';
import List from './List';

export default function Lists(props) {
	const { datas } = props;

	return (
		<ul className="lists">
			{
				datas.map((data) => <List datas={data} key={data.id} />)
			}
		</ul>
	);
}