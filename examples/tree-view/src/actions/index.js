export const ADD_FILE = 'ADD_FILE'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'

export const addFile = ({nodeId, filePath}) => ({
  type: ADD_FILE,
  nodeId,
  filePath
})

let nextId = 0
export const createNode = ({folderName, parentIds}) => ({
  type: CREATE_NODE,
  nodeId: `new_${nextId++}`,
  folderName,
  parentIds
})

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
})

export const addChild = ({nodeId, childId, folderName}) => ({
  type: ADD_CHILD,
  nodeId,
  childId,
  folderName
})

export const removeChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
})
