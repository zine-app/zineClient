import * as React from 'react'
import PostForm from 'app/components/forms/PostForm'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'
import savePost from 'app/actions/post/savePost'
import hideModal from 'app/actions/UI/modal/hideModal'
import { assign } from 'lodash'


const mapDispatchToProps = (dispatch, { zine, history }) => ({
  save: post => {
    return dispatch(savePost(assign(post, { zineId: zine.id })))
      .then(action =>
        history.push(`/${zine.name}/post/${action.payload.id}`))
      .then(dispatch(hideModal()))
  },

  close: () => dispatch(hideModal())
})

const mapStateToProps = (state, props) => ({
  initialValues: props.post
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'postForm'
})(PostForm)))
