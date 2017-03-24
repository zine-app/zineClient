import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'app/styles/reset'
import 'app/styles/app'
import AppLoader from 'app/containers/AppLoader'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'


export default () =>
  <main className="zine-app--main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:zineName" component={ZineHomePage} />
      <Route component={FourOFour} />
    </Switch>
    <AppLoader />
  </main>
