import React from 'react';
import { List, Pagination } from 'antd'
import { Link } from 'react-router-dom';

function TopicsList(props) {
  const { loading, dataSource, tab, nowPage } = props;
  console.log(props);

  return (
    <div>
      <List
        loading={loading}
        dataSource={dataSource}
        renderItem={item => {
          return <List.Item>{item.title}</List.Item>;
        }}
      />
      <Pagination
        hideOnSinglePage={false}
        total={1000}
        showSizeChanger={false}
        itemRender={(page, type, originalElement) => {
          return (type === 'page'
            ? (page === nowPage
              ? <span style={{
                color: '#80BD01'
              }}>{page}</span>
              : <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>)
            : <Link to={`/?tab=${tab}&page=${page}`}>{originalElement}</Link>);
        }}
      />
    </div>
  );
}

export default TopicsList;