import * as React from 'react'
import 'app/styles/sidebar'
import UserProfileButton from 'app/containers/UserProfileButton'
import HomePageTools from 'app/components/sidebar/groups/HomePageTools'
import OwnZines from 'app/containers/sidebar/groups/OwnZines'
import ZineEditorTools from 'app/containers/sidebar/groups/ZineEditorTools'
import PostEditorTools from 'app/components/sidebar/groups/PostEditorTools'
import { Router } from 'react-router-dom'

interface SidebarProps {
  user: any
  zine: any
  post?: any
  postActions?:any
  history?:any
}

export default ({ user, zine, post, postActions, history }:SidebarProps) =>
  <div className="sidebar--container">
    <div className="sidebar--container--header">
      <UserProfileButton />
    </div>
    <div className="sidebar--container--main">
      <HomePageTools/>
      { user && zine && user.id === zine.ownerId && !post && <ZineEditorTools zine={zine} /> }
      { user && zine && user.id === zine.ownerId && post && <PostEditorTools zine={zine} post={post} deletePost={postActions.delete} history={history} />}
      <OwnZines />
    </div>
    <div className="sidebar--container--footer"></div>
  </div>
