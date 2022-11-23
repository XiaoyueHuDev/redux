import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {TreeHeaderWrapper} from './FolderTreeStyle'
import {FileAddOutlined, FolderAddOutlined} from '@ant-design/icons'

export class Node extends Component {
  render() {
    return (
      <TreeHeaderWrapper>
        <div className='headerLeft'>
            <div className='addFolder'>
            <FolderAddOutlined style={{marginRight:5}} />
                New folder
            </div>
            <div className='addFolder'>
            <FileAddOutlined style={{marginRight:5}} />
                New file
            </div>
        </div>
      </TreeHeaderWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode