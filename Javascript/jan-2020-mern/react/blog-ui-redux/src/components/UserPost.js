import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class UserPost extends React.Component {

    render() {
        return (
            <div>
               {
                   this.props.user? (<div> <h2>USER NAME: {this.props.user.name} </h2> <br/>
                   <h3>POSTS WRITTEN BY USER</h3>
                    <ul>
                        {
                            this.props.userPosts.map(post => {
                                return (
                                    <li key={post.id}><Link to={`/posts/${post.id}`} >{post.title}</Link></li>
                                )
                            })
                        }
                    </ul></div>) : (<div><p>loading...</p></div>)
               }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        userPosts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserPost)