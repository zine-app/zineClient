import * as React from 'react'
import 'app/styles/sidebar'
import UserProfileButton from 'app/containers/UserProfileButton'
import HomePageTools from 'app/components/sidebar/groups/HomePageTools'
import OwnZines from 'app/containers/sidebar/groups/OwnZines'
import ZineEditorTools from 'app/containers/sidebar/groups/ZineEditorTools'

interface SidebarProps {
  editorTools: boolean
  user: any,
  zine: any
}

export default ({ editorTools, user, zine }:SidebarProps) =>
  <div className="sidebar--container">
    <div className="sidebar--container--header">
      <UserProfileButton />
    </div>
    <div className="sidebar--container--main">
      <HomePageTools />
      { editorTools && <ZineEditorTools zine={zine} /> }
      <OwnZines />
    </div>
    <div className="sidebar--container--footer"></div>
  </div>
