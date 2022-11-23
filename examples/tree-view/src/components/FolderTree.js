import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FolderTreeWrapper} from './FolderTreeStyle'
import FolderNode from './FolderNode'
import FileNode from './FileNode'
import {FolderOutlined, FolderAddOutlined, DownOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import TreeHeader from './TreeHeader'
export default class Node extends Component {

    handelClick = () => {
        console.log(33);
    }

  render() {
    return (
      <FolderTreeWrapper>
        {/* <TreeHeader clike={this.handelClick}/> */}
          <div className='contenner'>

            <div className='left_part'>
              {/* <DownOutlined/> */}
              <FolderNode id={0} clike={this.handelClick}/>
            </div>

            <div className='right_part'>
                <FileNode id={0}/>
            </div>
          </div>
      </FolderTreeWrapper>
    )
  }
}
