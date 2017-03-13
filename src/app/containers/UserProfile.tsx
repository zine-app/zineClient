import React from 'react'
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
  initialValues: state.get('user').toMap(),
  user: state.get('user')
})

const mapDispatchToProps = (dispatch) => ({
  saveUser: user => dispatch(async () => {
    if(user.profileImage) {
      const uploadImageResponse = await uploadImage(user.profileImage[0].file)

      user.profileImageURL = uploadImageResponse.body.url
    }

    return dispatch(saveUser(pick(user, ['name', 'profileImageURL'])))
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm)
