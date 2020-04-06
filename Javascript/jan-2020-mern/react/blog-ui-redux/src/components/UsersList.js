import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetUsers } from '../actions/usersAction'

class UsersList extends React.Component {
   

    componentDidMount() {
      if(this.props.users.length === 0) {
          this.props.dispatch(startGetUsers())
      }
    }

    render() {
        return (
            <div>
                <h2>Users List - {this.props.users.length}</h2>
                <ul>
                    {
                        this.props.users.map(user => {
                            return (
                                <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersList)

