import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'app/styles/reset'
import 'app/styles/app'
import 'app/styles/grid'
import AppLoader from 'app/components/AppLoader'
import SplashPage from 'app/components/SplashPage'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import FourOFour from 'app/components/FourOFour'
import PostPage from 'app/components/pages/PostPage'
import AppTools from 'app/components/AppTools'


export default ({ loading, user, zine }) =>
  <main className="zine-app--main">
  {
    loading ?
      <AppLoader shouldDisplay={true} /> :
      user && user.name ?
        <AppTools zine={zine} user={user}>
          <Switch>
            <Route
              exact path="/"
              component={HomePage}
              render={({ component: Component, ...rest }) =>
                <Component user={user} zine={zine} {...rest}/>
              }
            />
            <Route
              exact path="/:zineName"
              component={ZineHomePage}
              render={({ component: Component, ...rest }) =>
                <Component user={user} zine={zine} {...rest}/>
              }
            />
          </Switch>
        </AppTools>
        :
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Redirect to="/" />
        </Switch>
  }
  </main>


  // <Route exact path="/:zineName" component={ZineHomePage} />
  // <Route exact path="/:zineName/post/:postId" component={PostPage} />
