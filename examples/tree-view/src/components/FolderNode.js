import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Button} from 'antd'
import {FolderOutlined, RightOutlined, FileAddOutlined, FolderAddOutlined} from '@ant-design/icons'
export class Node extends Component {

    constructor(props) {
        super(props)
        this.state = {
          show:true,
          defaultId:0,
          selectFolder:0
        }
      }

    handleAddFileClick = () => {
        // should have a model and selected current item
        const { addFile, id } = this.props
        addFile({
            nodeId: id,
            filePath: `http:xxxxx${Math.random()}.png`
        });
    }

    handleAddChildClick = e => {
        // should have a model and selected current item
      e.preventDefault()
  
      const { addChild, createNode, id, parentIds } = this.props
      const folderName = `folder${Math.random()}`;

        const childId = createNode({
          folderName,
          parentIds: [...parentIds, id]
        }).nodeId

      addChild({
        nodeId: id,
        childId,
      })
      this.handleChildSelect()
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
                <ConnectedNode  id={childId} parentId={id} />
            </li>
        )
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
        const { parentId, childIds, filePaths, folderName,id } = this.props
        console.log( this.props);
        return (
            <div className={'list-folder'}>
                <div
                    onClick={this.handleChildSelect}
                    className={'folder-name'}
                    // className={id == this.state.selectFolder ? 'clicked' : 'clicknot'}
                >
                    {
                        childIds.length?
                            <RightOutlined className={this.state.show?'rote':'rote-back'} onClick={() => {this.setState({show:!this.state.show})}}/>:
                        null
                    }
                    <FolderOutlined/>
                    {folderName}
                    <FileAddOutlined style={{margin:'0 5px 0 5px'}} onClick={this.handleAddFileClick}/>
                    <FolderAddOutlined onClick={this.handleAddChildClick}/>
                    {typeof parentId !== 'undefined' &&
                        <a href="#" onClick={this.handleRemoveClick}
                        style={{ color: 'lightgray', textDecoration: 'none', paddingLeft:5 }}>
                            ×
                        </a>
                    }
                </div>
                <div className={this.state.show ? 'show' : 'hidden'}>
                    <ul>
                        <div>
                            {childIds&&childIds.map(this.renderChild)}
                                {filePaths.map((filePath, index) => (<li key={index}>
                                    file: {filePath}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode