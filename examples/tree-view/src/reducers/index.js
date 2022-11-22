import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE, ADD_FILE } from '../actions'
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
  console.log('----- node state --------');
  console.log(action);
  switch (action.type) {
    case CREATE_NODE:
      return {
        id: action.nodeId,
        counter: 0,
        filePaths:[],
        childIds: []
      }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
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
        folderName: action.folderName
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

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }

  // return Object.assign(state,{ [nodeId]: node(state[nodeId], action)} )
}
