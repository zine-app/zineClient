import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'
import FourOFour from 'app/components/FourOFour'
import ZineHomePosts from 'app/components/ZineHomePosts'

export default ({ zine, user, posts }) =>
  zine ?
    <MasterPage
      zine={zine}
      user={user}
    >
      <ZineHomePosts posts={posts} />
    </MasterPage> :
    <FourOFour />
