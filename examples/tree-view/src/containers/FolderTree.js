import React from 'react'
import { Component } from 'react'
import {FolderTreeWrapper} from '../components/FolderTreeStyle'
import FolderNode from './FolderNode'
import FileNode from './FileNode'
import TreeHeader from './TreeHeader'
export default class Node extends Component {

  render() {
    return (
      <FolderTreeWrapper>
        <TreeHeader />
          <div className='contenner'>

            <div className='left_part'>
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
