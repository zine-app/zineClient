import * as React from 'react'
import MasterPage from 'app/components/InAppMasterPage'
import ZineHeader from 'app/components/ZineHeader'
import ZineNav from 'app/containers/ZineNav'
import ZineBody from 'app/components/ZineBody'
import PostModal from 'app/containers/PostModal'

interface TZineMasterPageProps {
  children?: any
  zine: any
  user: any
}

export default ({ zine, user, children }:TZineMasterPageProps) =>
  <MasterPage
    zine={zine}
    user={user}
    editorTools={user.id === zine.ownerId}
  >
    <PostModal />
    <ZineHeader zine={zine} user={user} />
    <ZineNav zine={zine} user={user} />
    <ZineBody>
      { children }
    </ZineBody>
  </MasterPage>
