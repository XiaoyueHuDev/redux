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
        console.log(filePaths);
        return (
            <div>
                <ul><div
                >
                    <FolderOutlined/>
                    {folderName}
                </div>
                    {childIds&&childIds.map(this.renderChild)}
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