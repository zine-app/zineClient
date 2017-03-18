import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import 'app/styles/tooltip'
import Sidebar from 'app/components/sidebar/Sidebar'
import Slideout from 'app/containers/Slideout'
import ReactTooltip from 'react-tooltip'


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
    <Slideout zine={zine} />
    <div
      onClick={() => console.log('clicking yay')}
      className='zine-home-page-layout--main'
    >
      { children }
    </div>
    <ReactTooltip type="dark" effect="solid" delayShow={1000} className="tooltip"/>
  </div>
