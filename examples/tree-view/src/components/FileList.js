import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FileListWrapper} from './FolderTreeStyle'
import {FolderOutlined, FolderAddOutlined} from '@ant-design/icons'

export class Node extends Component {
  render() {
    return (
      <FileListWrapper>
        <div className='headerLeft'>
            <div className='addFolder'>
                123
            </div>
        </div>
      </FileListWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
