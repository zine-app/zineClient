import * as React from 'react'
import 'app/styles/sidebar'
import UserProfileButton from 'app/components/UserProfileButton'
import HomePageTools from 'app/components/sidebar/groups/HomePageTools'
import OwnZines from 'app/containers/sidebar/groups/OwnZines'
import ZineEditorTools from 'app/containers/sidebar/groups/ZineEditorTools'
import PostEditorTools from 'app/components/sidebar/groups/PostEditorTools'
import { Router } from 'react-router-dom'

interface SidebarProps {
  user: any
  zine: any
  post?: any
  actions?:any
  history?:any
}

export default ({ user, zine, post, actions, history }:SidebarProps) =>
  <div className="sidebar--container">
    <div className="sidebar--container--header">
      <UserProfileButton user={user} actions={actions} />
    </div>
    <div className="sidebar--container--main">
      <HomePageTools/>
      { user && zine && user.id === zine.ownerId && !post && <ZineEditorTools zine={zine} /> }
      { user && zine && user.id === zine.ownerId && post &&
        <PostEditorTools
          zine={zine}
          post={post}
          actions={actions}
          history={history}
        />
      }
      <OwnZines />
    </div>
    <div className="sidebar--container--footer"></div>
  </div>
