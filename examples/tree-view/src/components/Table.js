import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Name',
    width:'50%',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const App = (props) => {
  return <Table columns={columns} dataSource={props.data} pagination={false} />;
};
export default App;