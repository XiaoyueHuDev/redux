import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
// import Node from './containers/Node'
import FolderTree  from './containers/FolderTree'
import './index.css';

const tree = generateTree()
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        {/* <Node id={0} /> */}
        <FolderTree />
    </Provider>,
    document.getElementById('root')
)
