import * as React from 'react'
import { Route } from 'react-router-dom'
import App from 'app/containers/App'
import IndexRouteHandler from 'app/containers/IndexRouteHandler'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'


export default
  <App>
    <Route exact path="/" component={IndexRouteHandler} />
    <Route exact path="/:zineName" component={ZineHomePage} />
    <Route component={FourOFour} />
  </App>
