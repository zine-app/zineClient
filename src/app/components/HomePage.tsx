import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import Sidebar from 'app/components/sidebar/Sidebar'
import Slideout from 'app/containers/Slideout'
import Explainer from 'app/components/Explainer'

export default () =>
  <div>
    <div className='zine-home-page-layout--sidebar'>
      <Sidebar />
    </div>
    <Slideout />
    <div className='zine-home-page-layout--main'>
      <Explainer />
    </div>
  </div>
