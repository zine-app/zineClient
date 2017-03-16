import * as React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from 'app/containers/App'
import IndexRouteHandler from 'app/containers/IndexRouteHandler'
import ZineHomePage from 'app/containers/ZineHomePage'

export default
  <Route path="/" component={App} >
    <IndexRoute component={IndexRouteHandler} />
    <Route path="/:zineName" component={ZineHomePage} />
  </Route>
