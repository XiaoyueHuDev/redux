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
        const { selected } = this.props
        let childIdArr = this.props[selected.id].childIds.map(name => this.props[name]?.folderName)
        let dataArr = [...childIdArr,...this.props[selected.id].filePaths];
        let arr = dataArr.map((name,index) => ({name, key:index}));
        return (
            <div>
                <Table data={[...arr]} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode