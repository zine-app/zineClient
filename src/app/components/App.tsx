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
import fetchPosts from 'app/actions/post/fetchPosts'
import fetchZine from 'app/actions/zine/fetchZine'
import fetchUsers from 'app/actions/user/fetchUsers'
import { uniq } from 'lodash'


export default ({ loading, user, zine }) =>
  <main className="zine-app--main">
  {
    loading ?
      <AppLoader shouldDisplay={true} /> :
      user && user.name ?
        <Switch>
          <Route
            exact path="/"
            render={props =>
              <AppTools zine={zine} user={user}>
                <HomePage user={user} zine={zine} {...props}/>
              </AppTools>
            }
          />
          <FetchRoute
            exact path="/:zineName"
            load={async (dispatch, props) => {
              const zineResponse = await dispatch(fetchZine({ name: props.computedMatch.params.zineName }))
              const postResponse = await dispatch(fetchPosts({ zineId: zineResponse.payload.id, deleted: false }))
              const authorIds = uniq(postResponse.payload.map(post => post.authorId))
              await dispatch(fetchUsers({ _id: authorIds.length > 1 ? authorIds: authorIds[0] }))
            }}
            render={props =>
              <AppTools zine={zine} user={user}>
                <ZineHomePage user={user} zine={zine} {...props}/>
              </AppTools>
            }
          />
          <FetchRoute
            exact path="/:zineName/post/:postId"
            load={async (dispatch, props) => {
              const postResponse = await dispatch(fetchPosts({ _id: props.computedMatch.params.postId, deleted: false }))
            }}
            render={props =>
              <ZinePostPage user={user} zine={zine} {...props}/>
            }
          />
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <FetchRoute
            exact path="/:zineName"
            load={async (dispatch, props) => {
              const zineResponse = await dispatch(fetchZine({ name: props.computedMatch.params.zineName }))
              const postResponse = await dispatch(fetchPosts({ zineId: zineResponse.payload.id, deleted: false }))
              const authorIds = uniq(postResponse.payload.map(post => post.authorId))
              await dispatch(fetchUsers({ _id: authorIds.length > 1 ? authorIds: authorIds[0] }))
            }}
            render={props =>
              <ZineHomePage user={user} zine={zine} {...props}/>
            }
          />
          <FetchRoute
            exact path="/:zineName/post/:postId"
            load={async (dispatch, props) => {
              await dispatch(fetchPosts({ _id: props.computedMatch.params.postId }))
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
