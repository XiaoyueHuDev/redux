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
        let dataArr = [...selected.childIds,...selected.filePaths];
        let arr = dataArr.map((name,index) => ({name, key:index}));
        return (
            <div>
                {/* {
                    selected.childIds?.map(item => {
                        return <p>{item}</p>
                    })
                }
                {
                    selected.filePaths?.map(item => {
                        return <p>{item}</p>
                    })
                } */}
                <Table data={[...arr]} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(222,state);
    console.log(111111,state[ownProps.id]);
    return {
        selected: state.selected
    }
    // return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode