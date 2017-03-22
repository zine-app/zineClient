import React from 'react'
import { connect } from 'react-redux'
import PostImageForm from 'app/components/PostImageForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'

export default reduxForm({
  form: 'postImage'
})(PostImageForm)
