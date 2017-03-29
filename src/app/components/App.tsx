import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'app/styles/reset'
import 'app/styles/app'
import 'app/styles/grid'
import AppLoader from 'app/containers/AppLoader'
import SplashPage from 'app/components/SplashPage'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'


export default ({ loading, me}) =>
  <main className="zine-app--main">
  {
    loading ?
      <AppLoader shouldDisplay={true} /> :
      me && me.name ?
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:zineName" component={ZineHomePage} />
        </Switch> :
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Redirect to="/" />
        </Switch>

  }
  </main>
