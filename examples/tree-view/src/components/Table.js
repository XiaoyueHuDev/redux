import { Table,Popconfirm,message } from 'antd';
import React from 'react';
import {FolderOutlined} from '@ant-design/icons'
import getIcon from './Icon'
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
      align:'center',
      width:'10%',
      render: (text) => {
        return (
          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={(e) => {deleteFile(e,text)}}
          >
            <div style={{cursor:'pointer'}}>
              {
                getIcon('deleteBtn')
              }
            </div>
          </Popconfirm>
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
      message.success(`${text.name} be deleted`)
    }else {
      removeChild(id, text.key)
      deleteNode(text.key)
      message.success(`${text.name} be deleted`)
    }
  }

  const handleChildSelect = (e,{key,name}) => {
    e.stopPropagation()
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
        onDoubleClick: (e) => {handleChildSelect(e,record)}
      }
    }}
  />;
};
export default App;