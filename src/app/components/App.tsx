import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from 'app/containers/PrivateRoute'
import 'app/styles/reset'
import 'app/styles/app'
import 'app/styles/grid'
import AppLoader from 'app/containers/AppLoader'
import SplashPage from 'app/components/SplashPage'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'


export default () =>
  <main className="zine-app--main">
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route exact path="/login" component={SplashPage} />
      <Route exact path="/:zineName" component={ZineHomePage} />
      <Route component={FourOFour} />
    </Switch>
    <AppLoader />
  </main>
