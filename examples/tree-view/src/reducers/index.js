import { ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE, ADD_FILE, SELECT_CHILD } from '../actions'
import generateTree from '../generateTree';

const childIds = (state, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [ ...state, action.childId ]
    case REMOVE_CHILD:
      return state.filter(id => id !== action.childId)
    default:
      return state
  }
}

const node = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        id: action.nodeId,
        folderName: action.folderName,
        parentIds: action.parentIds,
        filePaths:[],
        childIds: []
      }
    case ADD_FILE:
      return {
        ...state,
        filePaths: addNewFilePath(state.filePaths, action.filePath)
      }
    case ADD_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action),
      }
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      }
    default:
      return state
  }
}

const addNewFilePath = (filePaths, newFilePath) => {
  return [...filePaths, newFilePath];
}

const getAllDescendantIds = (state, nodeId) => (
  state[nodeId].childIds.reduce((acc, childId) => (
    [ ...acc, childId, ...getAllDescendantIds(state, childId) ]
  ), [])
)

const deleteMany = (state, ids) => {
  state = { ...state }
  ids.forEach(id => delete state[id])
  return state
}

const initialState = generateTree();

export default (state = initialState, action) => {
  const { nodeId } = action
  if (typeof nodeId === 'undefined') {
    return state
  }

  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId)
    return deleteMany(state, [ nodeId, ...descendantIds ])
  }

  if (action.type === SELECT_CHILD) {
    return {
      ...state,
      selected: { ...action.selected }
    }
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
