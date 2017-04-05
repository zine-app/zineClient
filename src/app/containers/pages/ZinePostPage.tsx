import * as React from 'react'
import { connect } from 'react-redux'
import ZinePostPage from 'app/components/pages/ZinePostPage'
import deletePost from 'app/actions/post/deletePost'


const mapDispatchToProps = dispatch => ({
  postActions: {
    delete: post => dispatch(deletePost(post))
  }
})

const mapStateToProps = (state, { match: { params: { postId } } }) => ({
  post: state.get('posts').find(post => post.id === postId) || null
})

export default connect(mapStateToProps, mapDispatchToProps)(ZinePostPage)
