import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Table from '../components/Table'
import { Breadcrumb } from 'antd'
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

    handleChildSelect = (ids) => {
      const { selectChild } = this.props;
      const {parentIds, childIds, filePaths, folderName, id} = this.props[ids];
      selectChild({
        id,
        filePaths,
        folderName,
        childIds,
        parentIds
      });
    }

    render() {
        const { selected,selected:{id, parentIds} } = this.props
        let brandList = [...parentIds,id];
        let brandNameList = brandList.map(item => {
          return {name:this.props[item]?.folderName,id:this.props[item]?.id}
        })
        let childIdArr = this.props[selected.id]?.childIds.map(name => ({name:this.props[name]?.folderName,key:this.props[name]?.id}));
        let fileArr = this.props[selected.id]?.filePaths.map((item,index) => ({name:item,key:`file${index}`}))
        let dataArr = [...childIdArr,...fileArr];
        return (
            <div>
                <Breadcrumb style={{padding:10,borderBottom:'1px solid #f0f0f0'}} separator=">">
                  {
                    brandNameList.map(item => {
                        return (
                            <Breadcrumb.Item className='bread-item' onClick={() => {this.handleChildSelect(item.id)}}>{item.name}</Breadcrumb.Item>
                        )
                    })
                  }
                </Breadcrumb>
                <Table methodAndMsg={this.props} data={[...dataArr]} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode