import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'
import FourOFour from 'app/components/FourOFour'

export default ({ zine, user }) =>
  zine ?
    <MasterPage
      zine={zine}
      user={user}
    >
      <div>content</div>
    </MasterPage> :
    <FourOFour />
