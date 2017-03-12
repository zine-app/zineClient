import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import Sidebar from 'app/components/Sidebar'

export default () =>
  <div>
    <div className='zine-home-page-layout--sidebar'>
      <Sidebar />
    </div>
    <div className='zine-home-page-layout--main'></div>
  </div>
