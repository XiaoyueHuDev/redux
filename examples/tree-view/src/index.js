import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
// import Node from './containers/Node'
import Node from './components/FolderTree'
import TreeHeader from './components/TreeHeader'

const tree = generateTree()
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <TreeHeader />
        <Node/>
    </Provider>,
    document.getElementById('root')
)
