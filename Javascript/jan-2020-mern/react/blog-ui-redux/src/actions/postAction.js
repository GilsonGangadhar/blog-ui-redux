import axios from 'axios'

export const setPosts = (posts) => {
    return {type: 'SET_POSTS', payload: posts}
}

export const startGetPosts = () => {
    return(dispatch) => {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)

        .then(response => {
            let posts = response.data
            dispatch(setPosts(posts))
        })
    }
}