import { Table, Button } from 'antd';
import React from 'react';
import {FolderOutlined} from '@ant-design/icons'
const App = (props) => {
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
      const fileIndex = props.methodAndMsg[id].filePaths.findIndex(item => {return item === e.name});
      deleteFile({
        nodeId: id,
        fileIndex,
      });
    }else {
      removeChild(id, e.key)
      deleteNode(e.key)
    }
  }

  const handleChildSelect = ({key,name}) => {
    if(name.indexOf('.') === -1) {
      const { selectChild } = props.methodAndMsg;
      const {parentIds, childIds, filePaths, folderName, id} = props.methodAndMsg[key];
      selectChild({
        id,
        filePaths,
        folderName,
        childIds,
        parentIds
      });
    }
  }

  return <Table
    columns={columns}
    dataSource={props.data}
    pagination={false}
    onRow={record => {
      return {
        onClick: () => {handleChildSelect(record)}
      }
    }}
  />;
};
export default App;