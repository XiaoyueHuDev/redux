import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {FolderTreeWrapper} from './FolderTreeStyle'
import TreeHeader from './TreeHeader'
import FolderList from './FolderList'
import FileList from './FileList'
import FolderNode from './FolderNode'
import {FolderOutlined, FolderAddOutlined, DownOutlined} from '@ant-design/icons'
import {Button} from 'antd'
export default class Node extends Component {



  render() {
    console.log('----------');
    return (
      <FolderTreeWrapper>
          <div className='contenner'>

            <div className='left_part'>
              <DownOutlined/>
              <FolderNode id={0}/>
            </div>

            <div className='right_part'>

            </div>
          </div>
      </FolderTreeWrapper>
    )
  }
}

