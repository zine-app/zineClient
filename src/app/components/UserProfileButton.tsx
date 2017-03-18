import * as React from 'react'
import ProfileImage from 'app/components/ProfileImage'
import 'app/styles/userProfileButton'

export default ({ src="", onClick }) =>
  <button className="user-profile-button" onClick={onClick} data-tip="profile settings">
    <ProfileImage src={src} />
  </button>
