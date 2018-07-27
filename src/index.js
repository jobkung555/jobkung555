import React from 'react'
import ReactDOM from 'react-dom'
import NepNep from './components/NepNep'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './reducers'
const store = createStore(rootReducers)
store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
    <Provider store={store}>
        <NepNep/>
    </Provider>
,document.getElementById('root'))