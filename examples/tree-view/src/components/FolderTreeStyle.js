import styled from "styled-components";

export const FolderTreeWrapper = styled.div`
margin: 20px;
border:1px solid #e0e0e0;
background: #fafafa;
    .contenner {
    height:100%;
    display:flex;
    min-height:400px;
    }
.left_part {
    width:40%;
    border-right:1px solid #e0e0e0;
    overflow-x: scroll;
}
.right_part {
    width:60%;
    overflow-x: scroll;
}
.list-folder {
    margin:10px;
}
.list-folder-items {
    margin:10px 0;
}
.folder-name{
    line-height:2em
}
.folder-noClick:hover {
    background:#eee
}
.folder-clicked {
    background:#ddd;
    line-height:2em;
    display:flex;
    align-items:center;
}
.folder-clicked svg {
    margin: 0 5px;
}
.folder-noClick {
    background: #fafafa;
    line-height:2em;
    display:flex;
    align-items:center;
}
.folder-noClick svg {
    margin: 0 5px;
}
.folder-padding {
    width:40px;
    display:inline-block;
}
ul {
    margin-top:0;
    padding-left:0;
    list-style-type: none 
}
.show {
    max-height:1000px;
    overflow:hidden;
    transition: max-height 1s;
}

.hidden {
    max-height:0;
    overflow:hidden;
    transition: max-height .25s;
}
.folder-inner {
    max-height: 0;
    overflow: hidden;
    transition: max-height .25s;
}
.rote{
  transform: rotate(90deg);
  transition: transform .2s linear;
}
.rote-back{
  transform: rotate(0deg);
  transition: transform .2s linear;
}
.bread-item {
    cursor:pointer;
}
.bread-item:hover {
    color:black;
    transition:all .5s;
}
`

export const FolderListWrapper = styled.div`
width:40%;
border-right:1px solid #e0e0e0;
`
export const FileListWrapper = styled.div`
width:60%;
color: red;
`
export const TreeHeaderWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #e0e0e0;
.headerLeft {
    margin:10px;
    display:flex
}
.addFolder {
    cursor: pointer;
    padding:5px;
    border-radius:3px;
    display:flex;
    align-items:center;
}
.addFolder svg {
    margin:0 5px;
}
.addFolder:hover {
    background-color: #d6dee0;
}
`