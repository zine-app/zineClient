import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'

export default ({ zine, user }) =>
  <MasterPage zine={zine} user={user}>
    <div>content</div>
  </MasterPage>
