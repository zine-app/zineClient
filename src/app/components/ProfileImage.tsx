import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/profileImage'


export default ({ src="", size="medium" }) =>
  <div
    className={`profile-image__${size}`}
    style={{
      backgroundImage: src ? `url(${src})` : 'none'
    }}
  >
  {
    src ? null : <ProfileIcon color="#FFF" />
  }
  </div>
