import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postAction'
import { Link } from 'react-router-dom'

class PostList extends React.Component {

    componentDidMount() {
        if(this.props.posts.length === 0) {
            this.props.dispatch(startGetPosts())
        }
    }
    

        render() {
        return (
            <div>
                <h2> Total Posts: {this.props.posts.length}</h2>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return (
                                
                                <li><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
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
        posts : state.posts
    }
}

export default connect(mapStateToProps)(PostList)

