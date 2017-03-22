import React from 'react'
import { connect } from 'react-redux'
import PostImageForm from 'app/components/PostImageForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import savePost from 'app/actions/post/savePost'


const mapDispatchToProps = dispatch => ({
  save: post => dispatch(savePost(post)).then(action => {
    if(action.error) throw new SubmissionError({ _error: action.meta.message })
  })
})

export default connect(undefined, mapDispatchToProps)(reduxForm({
  form: 'postImage'
})(PostImageForm))
