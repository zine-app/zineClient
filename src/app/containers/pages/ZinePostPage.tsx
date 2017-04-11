import * as React from 'react'
import { connect } from 'react-redux'
import ZinePostPage from 'app/components/pages/ZinePostPage'
import deletePost from 'app/actions/post/deletePost'
import toggleModal from 'app/actions/ui/Modal/toggleModal'

const mapDispatchToProps = dispatch => ({
  actions: {
    post: {
      delete: post => dispatch(deletePost(post))
    },
    modal: {
      toggle: props => dispatch(toggleModal(props))
    }
  }
})

const mapStateToProps = (state, { match: { params: { postId } } }) => ({
  post: state.get('posts').find(post => post.id === postId) || null
})

export default connect(mapStateToProps, mapDispatchToProps)(ZinePostPage)
