import styled from "styled-components";

export const FolderTreeWrapper = styled.div`
margin: 20px;
border:1px solid #e0e0e0;
background: #fafafa;
height:400px;
.contenner {
    height:100%;
    display:flex;
    border: 1px solid red;
}
.left_part {
    width:40%;
    border-right:1px solid #e0e0e0;
}
.right_part {
    width:60%;
}

.text-color {
  color: red;
}

.test-border {
  border: 1px solid red;
  width: 100px;
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