import * as React from 'react'
import 'app/styles/sidebar'
import UserProfileButton from 'app/containers/UserProfileButton'
import NewZineButton from 'app/containers/NewZineButton'

export default () =>
  <div className="sidebar--container">
    <div className="sidebar--container--header">
      <UserProfileButton />
    </div>
    <div className="sidebar--container--main">
      <NewZineButton />
    </div>
    <div className="sidebar--container--footer"></div>
  </div>
