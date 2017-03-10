import React from 'react'
import { connect } from 'react-redux'
import UserProfile from 'app/components/UserProfile'
import { reduxForm } from 'redux-form/immutable'
import saveUser from 'app/actions/user/saveUser'

const UserProfileForm = reduxForm({
  form: 'userProfile'
})(UserProfile)

const mapStateToProps = state => ({
  initialValues: state.get('user')
})

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm)
