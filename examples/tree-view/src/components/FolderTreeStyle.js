import styled from "styled-components";

export const FolderTreeWrapper = styled.div`
margin: 20px;
border:1px solid #e0e0e0;
background: #fafafa;
min-height:400px;
    .contenner {
    height:100%;
    display:flex;
}
.left_part {
    width:40%;
    border-right:1px solid #e0e0e0;
}
.right_part {
    width:60%;
}
ul{
    list-style-type: none 
}
.list-folder {
    width:100%;
    margin:10px;
}
.show {
    display:block;
}
.hidden {
    display:none
}
.folder-name:hover {
    background:#eee
}
.folder-visited {
    background:#ddd;
    width:100%
}
.rote{
  transform: rotate(90deg);
  transition: transform .2s linear;
}
.rote-back{
  transform: rotate(0deg);
  transition: transform .2s linear;
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
}
.addFolder:hover {
    background-color: #d6dee0;
}
`