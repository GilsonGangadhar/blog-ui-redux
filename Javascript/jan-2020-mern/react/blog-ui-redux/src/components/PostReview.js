import React from 'react'
import { connect } from 'react-redux'
import { startGetComments } from '../actions/commentsAction'
import { Link } from 'react-router-dom'

class PostReview extends React.Component {

    componentDidMount() {
        if(this.props.comments.length === 0) {
            this.props.dispatch(startGetComments())
        }
    }
    

    render(){
       let post = this.props.userPosts
       //console.log(post, "gokul")
        let user = this.props.users.find(user => user.id == post.userId)
        //console.log(user, "gilson")
        let userComments = this.props.comments.filter(comment => comment.postId == post.id)
        //console.log(userComments, "gilson")
        return (
            <div>
                <h2>USER NAME: {user.name} </h2> 
                <h3>TITLE: {post.title} </h3>
                <h4>BODY: {post.body}</h4>
                <p></p> 
                <hr/>
                <h3>Comments: </h3>
                <ul>
                    {
                        userComments.map(comment => {
                            return (
                                <li key={comment.id}>{comment.body}</li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <p><Link to={`/users/${user.id}`}>More Posts from author: {user.name}</Link></p>

            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        userPosts: state.posts.find(post => post.id == props.match.params.id),
        comments : state.comments,
        users : state.users

        
        
    }
}

export default connect(mapStateToProps)(PostReview)