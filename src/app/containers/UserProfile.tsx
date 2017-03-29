import React from 'react'
import getMyUser from 'app/selectors/me/getMyUser'
import { connect } from 'react-redux'
import UserProfile from 'app/components/UserProfile'
import { reduxForm } from 'redux-form/immutable'
import saveUser from 'app/actions/user/saveUser'
import uploadImage from 'app/webAPI/image'
import { assign, pick } from 'lodash'

const UserProfileForm = reduxForm({
  form: 'userProfile',
  enableReinitialize: true
})(UserProfile)

const mapStateToProps = state => ({
  // toMap enables us to set a ProfileImage property,
  // which allows us to cache a file and display a preview
  // before sending to the server
  initialValues: getMyUser(state).toMap()
})

const mapDispatchToProps = (dispatch) => ({
  saveUser: user => dispatch(saveUser(pick(user, ['name', 'profileImageURL'])))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm)
