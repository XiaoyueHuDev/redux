import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FolderListWrapper} from './FolderTreeStyle'
import {FolderOutlined, FolderAddOutlined, DownOutlined} from '@ant-design/icons'

export class Node extends Component {

    renderChild = childId => {
        const { id } = this.props.props
        console.log(3,id);
        return (
          <li key={childId}>
            <ConnectedNode id={childId} parentId={id} />
          </li>
        )
      }

  render() {
    const { childIds, filePaths } = this.props.props
    console.log(childIds);
    // const arr = childIds.map(this.renderChild)
    // console.log(arr);
    return (
      <FolderListWrapper>
        <ul>
        {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
              onClick={this.handleAddChildClick}
            >
              Add Folder
            </a>
          </li>
          {filePaths.map((filePath, index) => (<li key={index}>
            file: {filePath}
          </li>))}
        </ul>
      </FolderListWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
