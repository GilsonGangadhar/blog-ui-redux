import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import { startGetPosts } from './actions/postAction';
import { startGetUsers } from './actions/usersAction';
import { startGetComments } from './actions/commentsAction';

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(startGetPosts())
store.dispatch(startGetUsers())
store.dispatch(startGetComments())

const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('root'))