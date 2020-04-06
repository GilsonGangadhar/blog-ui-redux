import {createStore, combineReducers, applyMiddleware} from 'redux'
import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'
import commentsReducer from '../reducers/commentsReducer'
import thunk from 'redux-thunk'


const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        users: usersReducer,
        comments: commentsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore