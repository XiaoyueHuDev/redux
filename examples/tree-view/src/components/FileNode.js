import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Table from './Table'
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
        const { selected,id } = this.props
        console.log(this.props);
        let childIdArr = this.props[selected.id].childIds.map(name => ({name:this.props[name]?.folderName,key:this.props[name]?.id}));
        let fileArr = this.props[selected.id].filePaths.map((item,index) => ({name:item,key:`file${index}`}))
        let dataArr = [...childIdArr,...fileArr];
        return (
            <div>
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