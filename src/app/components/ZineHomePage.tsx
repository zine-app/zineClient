import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'
import FourOFour from 'app/components/FourOFour'
import ContentExplainer from 'app/components/ContentExplainer'

export default ({ zine, user }) =>
  zine ?
    <MasterPage
      zine={zine}
      user={user}
    >
      <ContentExplainer />
    </MasterPage> :
    <FourOFour />
