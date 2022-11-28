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
          <Button onClick={(e) => {deleteFile(e,text)}} type='primary'>
            Delete
          </Button>
        )
      }
    },
  ];
  
  const deleteFile = (e,text) => {
    e.stopPropagation()
    const { deleteFile,removeChild,deleteNode,selected:{filePaths,id} } = props.methodAndMsg;
    if(text.name.indexOf('.') !== -1) {
      const fileIndex = props.methodAndMsg[id].filePaths.findIndex(item => {return item === text.name});
      deleteFile({
        nodeId: id,
        fileIndex,
      });
    }else {
      removeChild(id, text.key)
      deleteNode(text.key)
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
        onClick: (e) => {handleChildSelect(record)}
      }
    }}
  />;
};
export default App;