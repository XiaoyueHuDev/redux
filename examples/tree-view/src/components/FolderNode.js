import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Button} from 'antd'
import {FolderOutlined, RightOutlined, DownOutlined} from '@ant-design/icons'
export class Node extends Component {

    constructor(props) {
        super(props)
        this.state = {
          show:true,
          defaultId:0,
          selectFolder:0
        }
      }

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
            <div className={'list-folder'}>
                <div onClick={() => {this.setState({selectFolder:id})}} className={'folder-name'}>
                    {
                        childIds.length?
                        (this.state.show ?
                        <DownOutlined onClick={() => {this.setState({show:!this.state.show})}}/> :
                        <RightOutlined onClick={() => {this.setState({show:!this.state.show})}}/>):
                        null
                    }
                    <FolderOutlined/>
                    {folderName}
                    {/* <Button onClick={this.handleAddFileClick}>
                        add file
                    </Button> */}
                    {' '}
                </div>
                {/* {typeof parentId !== 'undefined' &&
                <a href="#" onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/anchor-is-valid
                   style={{ color: 'lightgray', textDecoration: 'none' }}>
                    ×
                </a>
                } */}
                <ul className={this.state.show ? 'show' : 'hidden'}>
                    {childIds&&childIds.map(this.renderChild)}
                    <li key="add">
                        <a href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
                           onClick={this.handleAddChildClick}
                        >
                            Add Folder
                        </a>
                    </li>
                    {/* {filePaths.map((filePath, index) => (<li key={index}>
              file: {filePath}
            </li>
            ))} */}
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