import React from 'react'
import { connect } from 'react-redux'
import EmailSignInForm from 'app/components/forms/EmailSignInForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'

const mapDispatchToProps = dispatch => ({
  save: (data) => console.log('submitting', data.toJS())
})

export default connect(undefined, mapDispatchToProps)(reduxForm({ form: 'emailSignIn' })(EmailSignInForm))
