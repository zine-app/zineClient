import * as React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import IndexRouteHandler from '../containers/IndexRouteHandler'
import AboutPage from '../containers/AboutPage'

export default
  <Route path="/" component={App} >
    <IndexRoute component={IndexRouteHandler} />
  </Route>
