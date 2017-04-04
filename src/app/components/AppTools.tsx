import * as React from 'react'
import UserProfile from 'app/containers/UserProfile'
import 'app/styles/home'
import 'app/styles/tooltip'
import Sidebar from 'app/components/sidebar/Sidebar'
import Slideout from 'app/containers/Slideout'
import ReactTooltip from 'react-tooltip'
import Modal from 'app/containers/Modal/Modal'


interface InAppMasterPageProps {
  children?: any
  zine?: any
  user?: any
}

export default ({ children, user, zine }:InAppMasterPageProps) =>
  <div>
    <Modal />
    <div className='zine-home-page-layout--sidebar'>
      <Sidebar editorTools={!!(zine && zine.ownerId === user.id)} user={user} zine={zine} />
    </div>
    <div
      className='zine-home-page-layout--main'
    >
      { children }
    </div>
    <Slideout zine={zine} />
    <ReactTooltip type="dark" effect="solid" delayShow={1000} className="tooltip"/>
  </div>
