import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {TreeHeaderWrapper} from './FolderTreeStyle'
import {FileAddOutlined, FolderAddOutlined} from '@ant-design/icons'
import { Modal,Input } from 'antd'

export class Node extends Component {

  constructor(props) {
      super(props)
      this.state = {
        addFolderModelShow:false,
        addFileModelShow:false,
        loading:false,
        fileName:''
      }
    }

  handleAdd = (e) => {
      e.preventDefault()
      this.setState({loading:true})
      const { addFile, createNode, selected, addChild } = this.props
      if(this.state.addFileModelShow) {
        addFile({
          nodeId: selected.id,
          filePath: `${this.state.fileName}`
      });
      }else {
        const childId = createNode({
          folderName:`${this.state.fileName}`,
          parentIds: [...selected.parentIds, selected.id]
        }).nodeId
        addChild({
          nodeId: selected.id,
          childId,
        })
      }
      setTimeout(() => {
        this.setState({addFileModelShow:false,addFolderModelShow:false,fileName:'',loading:false})
        this.handleChildSelect()
      }, 1000);
  }

  handleChildSelect = () => {
    const { selectChild, parentIds, childIds, filePaths, folderName, id } = this.props;
    this.setState({selectFolder:id})
    selectChild({
      id,
      filePaths,
      folderName,
      childIds,
      parentIds
    });
  }

  render() {
    return (
      <TreeHeaderWrapper>
        <div className='headerLeft'>
            <div onClick={() => {this.setState({addFolderModelShow:true})}} className='addFolder'>
            <FolderAddOutlined style={{marginRight:5}} />
                New folder
            </div>
            <div onClick={() => {this.setState({addFileModelShow:true})}} className='addFolder'>
            <FileAddOutlined style={{marginRight:5}} />
                New file
            </div>
        </div>
        <Modal
          width={'40%'}
          title={this.state.addFolderModelShow?'addFolder':'addFile'}
          open={this.state.addFolderModelShow || this.state.addFileModelShow}
          onOk={this.handleAdd}
          confirmLoading={this.state.loading}
          onCancel={(e) => {this.setState({addFileModelShow:false,addFolderModelShow:false,fileName:''})}}
        >
          <Input value={this.state.fileName} onChange={(e) => { this.setState({fileName:e.target.value}) }} placeholder='please input fileName or folderName! And fileName sholud have file type!' />
        </Modal>
      </TreeHeaderWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode