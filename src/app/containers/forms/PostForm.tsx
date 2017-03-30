import * as React from 'react'
import PostForm from 'app/components/forms/PostForm'
import { reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'
import savePost from 'app/actions/post/savePost'
import { assign } from 'lodash'

const mapDispatchToProps = (dispatch, { zineId }) => ({
  save: post => dispatch(savePost(assign(post, { zineId })))
})

export default connect(undefined, mapDispatchToProps)(reduxForm({
  form: 'postForm'
})(PostForm))
