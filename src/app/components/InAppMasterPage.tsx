import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import Sidebar from 'app/components/sidebar/Sidebar'
import Slideout from 'app/containers/Slideout'

interface InAppMasterPageProps {
  children?: any
  editorTools?: boolean
  zine?: any
  user?: any
}

export default ({ children, editorTools=false, user, zine }:InAppMasterPageProps) =>
  <div>
    <div className='zine-home-page-layout--sidebar'>
      <Sidebar editorTools={editorTools} user={user} zine={zine} />
    </div>
    <Slideout />
    <div className='zine-home-page-layout--main'>
      { children }
    </div>
  </div>
