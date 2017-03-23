import React from 'react'
import { connect } from 'react-redux'
import PostImageForm from 'app/components/PostImageForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import savePost from 'app/actions/post/savePost'
import { assign } from 'lodash'

const mapDispatchToProps = (dispatch, { zineId, hideModal }) => ({
  save: post => dispatch(savePost(assign(post, { type: 'image', zineId })))
    .then(action => {
      if(action.error) throw new SubmissionError({ _error: action.meta.message })
      hideModal()
    })
})

export default connect(undefined, mapDispatchToProps)(reduxForm({
  form: 'postImage'
})(PostImageForm))
