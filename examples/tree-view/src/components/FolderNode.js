import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FolderOutlined, RightOutlined} from '@ant-design/icons'
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
        const { parentId, childIds, filePaths, folderName,id,selectedId,parentIds } = this.props
        return (
            <div className={ id === 0 ? 'list-folder' : 'list-folder-items'}>
                <div
                    onClick={this.handleChildSelect}
                    className={id == selectedId ? 'folder-clicked' : 'folder-noClick'}
                >
                    {
                        parentIds.map(item => {
                            return (
                                <span className={id === 0 ? null : 'folder-padding'}></span>
                            )
                        })
                    }
                    {
                        childIds?.length?
                            <RightOutlined className={this.state.show?'rote':'rote-back'} onClick={() => {this.setState({show:!this.state.show})}}/>:
                        null
                    }
                    <FolderOutlined/>
                    {folderName}
                </div>
                <div className={this.state.show ? 'show' : 'hidden'}>
                    <ul>
                        <div>
                            {childIds&&childIds.map(this.renderChild)}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {...state[ownProps.id],selectedId:state.selected.id}
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode