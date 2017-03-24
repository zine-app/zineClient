import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from 'app/containers/App'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'


export default
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:zineName" component={ZineHomePage} />
      <Route component={FourOFour} />
    </Switch>
  </App>
