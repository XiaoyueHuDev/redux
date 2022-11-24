import { Table } from 'antd';
import React from 'react';
import {FolderOutlined} from '@ant-design/icons'
const columns = [
  {
    title: 'Name',
    width:'50%',
    dataIndex: 'name',
    render:(text) => {
      return (
        <div>
          {
            text.indexOf('.') === -1 ? <FolderOutlined /> : null
          }
          {text}
        </div>
      )
    }
  },
  {
    title: 'Modified',
    dataIndex: 'modified',
  },
  {
    title: 'Size',
    dataIndex: 'size',
  },
];
const App = (props) => {
  return <Table columns={columns} dataSource={props.data} pagination={false} />;
};
export default App;