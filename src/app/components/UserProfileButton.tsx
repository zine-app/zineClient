import * as React from 'react'
import ProfileImage from 'app/components/ProfileImage'
import 'app/styles/userProfileButton'

export default ({ src="", onClick }) =>
  <button className="user-profile-button" onClick={onClick}>
    <ProfileImage src={src} />
  </button>
