import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'
import FourOFour from 'app/components/FourOFour'
import ZineHomePosts from 'app/containers/ZineHomePosts'

export default ({ zine, user }) =>
  zine ?
    <MasterPage
      zine={zine}
      user={user}
    >
      <ZineHomePosts zine={zine} />
    </MasterPage> :
    <FourOFour />
