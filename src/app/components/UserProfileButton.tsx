import * as React from 'react'
import ProfileImage from 'app/components/ProfileImage'
import 'app/styles/userProfileButton'

export default ({ user, actions }) =>
  <button className="user-profile-button" onClick={() => {
    user.name ? console.log('sad, a user'): actions.modal.toggle({ name: 'login', theme: 'black' })
  }} data-tip="profile settings">
    <ProfileImage src={user.profileImageURL} />
  </button>
