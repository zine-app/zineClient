import * as React from 'react'
import 'app/styles/userProfileButton'
import ProfileIcon from 'app/icons/profile'

export default ({ src="" }) =>
  <button className="user-profile-button">
    <div
      className="user-profile-button--image"
      style={{
        backgroundImage: `url(${src})`
      }}
    >
    {
      src ? null : <ProfileIcon color="#FFF" />
    }
    </div>
  </button>
