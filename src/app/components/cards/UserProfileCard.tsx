import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/card'
import 'app/styles/userProfileCard'

export default ({ actions }) =>
  <div className="card--container__user-profile">
    <div>
      <div className="card-header">profile settings</div>
      <UserProfile />
    </div>
    <button
      className="control--button"
      onClick={() => actions.auth.logout().then(actions.slideout.close())}
    >
      logout
    </button>
  </div>
