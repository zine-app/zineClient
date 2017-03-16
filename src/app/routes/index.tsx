import * as React from 'react'
import { Route } from 'react-router-dom'
import App from 'app/containers/App'
import IndexRouteHandler from 'app/containers/IndexRouteHandler'
import ZineHomePage from 'app/containers/ZineHomePage'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


export default
  <App>
    <Route exact path="/" component={IndexRouteHandler} />
    <Route path="/:zineName" component={ZineHomePage} />
  </App>

  // <Route path="/" component={App} ></Route>
