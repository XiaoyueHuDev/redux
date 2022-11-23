import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
// import Node from './containers/Node'
import FolderTree  from './components/FolderTree'

const tree = generateTree()
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <FolderTree />
    </Provider>,
    document.getElementById('root')
)
