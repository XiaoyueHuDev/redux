import { Table, Button } from 'antd';
import React from 'react';
import {FolderOutlined} from '@ant-design/icons'
const App = (props) => {
  console.log(33,props);
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
    {
      title: 'Config',
      render: (text) => {
        return (
          <Button onClick={() => {deleteFile(text)}} type='primary'>
            Delete
          </Button>
        )
      }
    },
  ];
  
  const deleteFile = (e) => {
    const { deleteFile,removeChild,deleteNode,selected:{filePaths,id} } = props.methodAndMsg;
    if(e.name.indexOf('.') !== -1) {
      console.log(22);
      const fileIndex = filePaths.findIndex((item) => {return item === e.name});
      deleteFile({
        nodeId: id,
        fileIndex,
      });
    }else {
      console.log(id);
      console.log(e.key);
      removeChild(id, e.key)
      deleteNode(id)
    }
  }
  return <Table columns={columns} dataSource={props.data} pagination={false} />;
};
export default App;