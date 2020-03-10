import React, { Component } from 'react';
import List from './List';

export default class Lists extends Component {
	render() {
		let { datas, changeDone } = this.props;

		return (
			<ul className="lists">
				{
					datas.map((item, index) => {
						return <List
							key={index}
							data={item}
							changeDone={changeDone}
						/>;
					})
				}
			</ul>
		);
	};
};