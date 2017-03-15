import * as React from 'react'
import 'app/styles/sidebar'
import UserProfileButton from 'app/containers/UserProfileButton'
import HomePageTools from 'app/components/sidebar/groups/HomePageTools'
import OwnZines from 'app/containers/sidebar/groups/OwnZines'

export default () =>
  <div className="sidebar--container">
    <div className="sidebar--container--header">
      <UserProfileButton />
    </div>
    <div className="sidebar--container--main">
      <HomePageTools />
      <OwnZines />
    </div>
    <div className="sidebar--container--footer"></div>
  </div>
