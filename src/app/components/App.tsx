import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'app/styles/reset'
import 'app/styles/app'
import 'app/styles/grid'
import AppLoader from 'app/components/AppLoader'
import SplashPage from 'app/components/SplashPage'
import HomePage from 'app/components/HomePage'
import ZineHomePage from 'app/containers/ZineHomePage'
import ZinePostPage from 'app/containers/pages/ZinePostPage'
import FourOFour from 'app/components/FourOFour'
import AppTools from 'app/components/AppTools'
import FetchRoute from 'app/containers/FetchRoute'
import fetchPost from 'app/actions/post/fetchPosts'


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
              render={props =>
                <HomePage user={user} zine={zine} {...props}/>
              }
            />
            <Route
              exact path="/:zineName"
              render={props =>
                <ZineHomePage user={user} zine={zine} {...props}/>
              }
            />
            <FetchRoute
              exact path="/:zineName/post/:postId"
              load={async (dispatch, props) => {
                const postResponse = await dispatch(fetchPost({ _id: props.computedMatch.params.postId }))
              }}
              render={props =>
                <ZinePostPage user={user} zine={zine} {...props}/>
              }
            />
          </Switch>
        </AppTools>
        :
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route
            exact path="/:zineName"
            render={props =>
              <ZineHomePage user={user} zine={zine} {...props}/>
            }
          />
          <FetchRoute
            exact path="/:zineName/post/:postId"
            load={async (dispatch, props) => {
              await dispatch(fetchPost({ _id: props.computedMatch.params.postId }))
            }
            }
            render={props =>
              <ZinePostPage user={user} zine={zine} {...props}/>
            }
          />
          <Redirect to="/" />
        </Switch>
  }
  </main>


  // <Route exact path="/:zineName" component={ZineHomePage} />
  // <Route exact path="/:zineName/post/:postId" component={PostPage} />
