import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Table from './Table'
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
                <svg t="1669633518766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1245" width="200" height="200"><path d="M449.3 109.8l348.432 180.3a48 48 0 0 1 20.572 64.692l-184.788 357.1-433.696-224.42 184.788-357.104a48 48 0 0 1 64.692-20.568z" fill="#FFFFFF" p-id="1246"></path><path d="M728.56 265.64H314.56l-99.68 192.64v36.96l400.52 207.2h22.96l170.2-328.96v-28a80 80 0 0 0-80-79.84z" fill="#CBECF9" p-id="1247"></path><path d="M633.52 720a8 8 0 0 1-3.68-0.88L196 494.52a8 8 0 0 1-3.44-10.8l184.88-357.08a56 56 0 0 1 75.48-24l348.44 180.28a56 56 0 0 1 24 75.48l-184.76 357.08a8 8 0 0 1-7.08 4.52zM210.6 484l419.48 217.04 181.08-350a40 40 0 0 0-17.16-53.92l-348.44-180.28a40 40 0 0 0-53.88 17.16z" fill="#2FB1EA" p-id="1248"></path><path d="M294.88 297.64h433.68a48 48 0 0 1 48 48v324.8H246.88v-324.8a48 48 0 0 1 48-48z" fill="#6DD0FC" p-id="1249"></path><path d="M294.88 297.64h396.84a48 48 0 0 1 48 48v324.8H246.88v-324.8a48 48 0 0 1 48-48z" fill="#A4ECFF" p-id="1250"></path><path d="M776.56 670.44v-228.8h-313.6l-53.24-68.28a71.56 71.56 0 0 0-56.76-27.72H246.88v324.8z" fill="#6DD0FC" p-id="1251"></path><path d="M776.56 678.44H246.88a8 8 0 0 1-8-8v-324.8a56 56 0 0 1 56-56h433.68a56 56 0 0 1 56 56v324.8a8 8 0 0 1-8 8z m-521.68-16h513.68v-316.8a40 40 0 0 0-40-40H294.88a40 40 0 0 0-40 40z" fill="#2FB1EA" p-id="1252"></path><path d="M815.72 919.64H208.28a32 32 0 0 1-32-32v-470a32 32 0 0 1 32-32h144.64a32 32 0 0 1 25.24 12.32l55.64 71.36a32 32 0 0 0 25.24 12.32h356.68a32 32 0 0 1 32 32v374a32 32 0 0 1-32 32z" fill="#FFC444" p-id="1253"></path><path d="M775.72 879.64H208.28a32 32 0 0 1-32-32v-430a32 32 0 0 1 32-32h144.64a32 32 0 0 1 25.24 12.32l55.64 71.36a32 32 0 0 0 25.24 12.32h316.68a32 32 0 0 1 32 32v334a32 32 0 0 1-32 32z" fill="#FFE76E" p-id="1254"></path><path d="M815.72 927.64H208.28a40 40 0 0 1-40-40v-470a40 40 0 0 1 40-40h144.64a39.76 39.76 0 0 1 31.56 15.4L440 464.4a24 24 0 0 0 18.92 9.24h356.68a40 40 0 0 1 40 40v374a40 40 0 0 1-39.88 40zM208.28 393.64a24 24 0 0 0-24 24v470a24 24 0 0 0 24 24h607.44a24 24 0 0 0 24-24v-374a24 24 0 0 0-24-24h-356.68a39.76 39.76 0 0 1-31.56-15.4L372 402.88a24 24 0 0 0-18.92-9.24z" fill="#2FB1EA" p-id="1255"></path><path d="M76 684m-20 0a20 20 0 1 0 40 0 20 20 0 1 0-40 0Z" fill="#D4FFD4" p-id="1256"></path><path d="M512 32m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#D4FFD4" p-id="1257"></path><path d="M992 460m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z" fill="#D4FFD4" p-id="1258"></path><path d="M756 1000m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0Z" fill="#D4FFD4" p-id="1259"></path><path d="M872 796m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z" fill="#D4FFD4" p-id="1260"></path><path d="M996 708m-20 0a20 20 0 1 0 40 0 20 20 0 1 0-40 0Z" fill="#FFBDBD" p-id="1261"></path><path d="M248 964m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#FFBDBD" p-id="1262"></path><path d="M76 460m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z" fill="#FFBDBD" p-id="1263"></path><path d="M96 788m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0Z" fill="#FFBDBD" p-id="1264"></path><path d="M340 960m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z" fill="#FFBDBD" p-id="1265"></path><path d="M248 176m-20 0a20 20 0 1 0 40 0 20 20 0 1 0-40 0Z" fill="#BBF1FF" p-id="1266"></path><path d="M936 368m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#BBF1FF" p-id="1267"></path><path d="M524 976m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z" fill="#BBF1FF" p-id="1268"></path><path d="M920 112m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0Z" fill="#BBF1FF" p-id="1269"></path><path d="M856 188m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z" fill="#BBF1FF" p-id="1270"></path><path d="M28 228m-20 0a20 20 0 1 0 40 0 20 20 0 1 0-40 0Z" fill="#FFF4C5" p-id="1271"></path><path d="M936 560m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#FFF4C5" p-id="1272"></path><path d="M712 140m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z" fill="#FFF4C5" p-id="1273"></path><path d="M168 196m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0Z" fill="#FFF4C5" p-id="1274"></path><path d="M628 964m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z" fill="#FFF4C5" p-id="1275"></path></svg>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode