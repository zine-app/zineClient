import * as React from 'react'
import MasterPage from 'app/components/InAppMasterPage'
import ZineHeader from 'app/components/ZineHeader'
import ZineNav from 'app/components/ZineNav'

export default ({ zine, user, children }:{ children?:any, zine:any, user:any }) =>
  <MasterPage>
    <ZineHeader zine={zine} user={user} />
    <ZineNav zine={zine} user={user} />
    { children }
  </MasterPage>
