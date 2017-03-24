import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/profileImage'


export default ({ src="", size="medium" }) =>
  <div
    className={`profile-image__${size}`}
    style={{
      backgroundImage: `url(${src})`
    }}
  >
  {
    src ? null : <ProfileIcon color="#FFF" />
  }
  </div>
