import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'

export default ({ zine, user, post }) =>
  <MasterPage zine={zine} user={user} >
    { post && <h1>{ post.title }</h1> }
  </MasterPage>
