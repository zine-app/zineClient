import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import Sidebar from 'app/components/sidebar/Sidebar'
import Slideout from 'app/containers/Slideout'

export default ({ children }:{ children?:any}) =>
  <div>
    <div className='zine-home-page-layout--sidebar'>
      <Sidebar />
    </div>
    <Slideout />
    <div className='zine-home-page-layout--main'>
      { children }
    </div>
  </div>
