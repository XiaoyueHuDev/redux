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
        console.log(this);
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
                <ConnectedNode  id={childId} parentId={id} />
            </li>
        )
    }

    render() {
        const { parentId, childIds, filePaths, folderName,id } = this.props
        // console.log( this.props);
        return (
            <div className={'list-folder'}>
                <div
                    onClick={() => {this.setState({selectFolder:id})}}
                    className={'folder-name'}
                    // className={this.state.selectFolder === id&&'folder-visited'}
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
                                {/* {filePaths.map((filePath, index) => (<li key={index}>
                                    file: {filePath}
                                </li>
                            ))} */}
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