import React, { Component } from 'react';
import List from './List';

export default class Lists extends Component {
	render() {
		let { datas, changeDone, deleteList, changeList } = this.props;

		return (
			<ul className="lists">
				{
					datas.map(item => {
						return <List
							key={item.id}
							data={item}
							changeDone={changeDone}
							deleteList={deleteList}
							changeList={changeList}
						/>;
					})
				}
			</ul>
		);
	};
};