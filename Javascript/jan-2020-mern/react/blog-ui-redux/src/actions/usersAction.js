import axios from 'axios'

export const setUsers = (users) => {
    return {type: 'SET_USERS', payload : users}
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/users')

        .then((response) => {
            let users = response.data
           dispatch(setUsers(users))
        })
    }
}