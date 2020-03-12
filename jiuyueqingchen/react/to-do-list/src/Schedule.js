import React, { Component } from 'react';

export default class Schedule extends Component {
	render() {
		let { datas, deleteAllDoneLists } = this.props;
		return (
			<div className="list-schedule">
				<p className="to-be-completed">{datas.filter((data) => data.done === false).length} 项待完成</p>
				<p
					className={`${datas.filter((data) => data.done === true).length === 0 ? 'hide ' : ''}clear-complete`}
					onClick={() => {
						deleteAllDoneLists();
					}}
				>清空 {datas.filter((data) => data.done === true).length} 已完成事项</p>
			</div>
		);
	};
};