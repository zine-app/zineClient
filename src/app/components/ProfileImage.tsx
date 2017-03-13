import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/profileImage'


export default ({ src="" }) =>
  <div
    className="profile-image"
    style={{
      backgroundImage: `url(${src})`
    }}
  >
  {
    src ? null : <ProfileIcon color="#FFF" />
  }
  </div>
