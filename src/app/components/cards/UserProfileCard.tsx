import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import LogoutButton from 'app/containers/LogoutButton'
import 'app/styles/card'
import 'app/styles/userProfileCard'

export default () =>
  <div className="card--container__user-profile">
    <UserProfile />
    <LogoutButton />
  </div>
