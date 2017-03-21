import * as React from 'react'
import MasterPage from 'app/components/InAppMasterPage'
import Explainer from 'app/components/Explainer'
import IndexRouteHandler from 'app/containers/IndexRouteHandler'

export default () =>
  <IndexRouteHandler>
    <MasterPage>
      <Explainer />
    </MasterPage>
  </IndexRouteHandler>
