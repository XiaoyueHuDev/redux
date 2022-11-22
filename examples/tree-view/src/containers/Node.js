import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

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
    const folderName = `folder${Math.random()}`;

    const childId = createNode(folderName).nodeId
    addChild({
      nodeId: id,
      childId,
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
    const { parentId, childIds, filePaths, folderName } = this.props
    return (
      <div>
        {folderName}
        {' '}
        <button onClick={this.handleAddFileClick}>
          add file
        </button>
        {' '}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick} // eslint-disable jsx-a11y/anchor-is-valid
             style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
          </a>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" // eslint-disable jsx-a11y/anchor-is-valid
              onClick={this.handleAddChildClick}
            >
              Add Folder
            </a>
          </li>
          {filePaths.map((filePath, index) => (<li key={index}>
            file: {filePath}
          </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
