import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postPostsId } from '../actions'

class PostDetailView extends Component {

    voteUpPost = () => {
        let id = "8xf0y6ziyjabvozdd253nd"
        let option = "upVote"
        this.props.voteOnPost(id, option)
    }

  
  render() {
    console.log('Props', this.props)
    const { posts } = this.props

    
    return (
      <div className="post-view">
      	<h3>Posts</h3>
      	<ul>
      		{posts.map((post) =>
      			<li key={post.id} className="post-list">
                    <div className="post-title">
                        {post.title}
                    </div>
                    <div className="post-author">
                        {post.author}
                    </div>
                    <div className="post-category">
                        {post.category}
                    </div>
                    <div className="post-timestamp">
                        {post.timestamp}
                    </div>
                    <div className="post-body">
                        {post.body}
                    </div>
                    <div className="post-timestamp">
                        {post.voteScore}
                    </div>
                    <div className="post-body">
                        {post.deleted}
                    </div>
      			</li>
      		)}
      	</ul>
      </div>
      
      )
  }
  
}

const mapStateToProps = (state) => {
    return {
      posts: state.post
    }
  
  }

const mapDispatchToProps = (dispatch) => {
    return {
        voteOnPost: (data) => dispatch(postPostsId(data)) //Vote on post
    }

}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailView)