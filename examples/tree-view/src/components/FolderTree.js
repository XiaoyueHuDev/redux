import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FolderTreeWrapper} from './FolderTreeStyle'
import TreeHeader from './TreeHeader'
import FolderList from './FolderList'
import FileList from './FileList'
import {FolderOutlined, FolderAddOutlined, DownOutlined} from '@ant-design/icons'
import {Button} from 'antd'
export class Node extends Component {

  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }

  handleAddFileClick = () => {
    const { addFile, id } = this.props
    addFile({
      nodeId: id,
      filePath: `http:xxxxx${Math.random()}.png`
    });
  }

  handleAddChildClick = e => {
    e.preventDefault()

    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    const folderName = `folder${childId}`;
    addChild({
      nodeId: id,
      childId,
      folderName
    })
  }

  handleRemoveClick = e => {
    e.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds, filePaths, folderName,id } = this.props
    console.log( this.props);
    return (
      <FolderTreeWrapper>
          <div className='contenner'>
            
            <div className='left_part'>
              <DownOutlined />
              {folderName}
              <Button onClick={this.handleAddFileClick}>
                add file
              </Button>
              {' '}
          {typeof parentId !== 'undefined' &&
            <a href="#" onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/anchor-is-valid
              style={{ color: 'lightgray', textDecoration: 'none' }}>
              ×
            </a>
          }
          <ul>
            {childIds.map(this.renderChild)}
            <li key="add">
              <a href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
                onClick={this.handleAddChildClick}
              >
                Add Folder
              </a>
            </li>
            {/* {filePaths.map((filePath, index) => (<li key={index}>
              file: {filePath}
            </li>))} */}
          </ul>
            </div>
            <div className='right_part'>

            </div>
          </div>
      </FolderTreeWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
