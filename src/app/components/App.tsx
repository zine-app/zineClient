import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'app/styles/reset'
import 'app/styles/app'
import 'app/styles/grid'
import AppLoader from 'app/components/AppLoader'
import HomePage from 'app/containers/pages/HomePage'
import ZineHomePage from 'app/containers/pages/ZineHomePage'
import ZinePostPage from 'app/containers/pages/ZinePostPage'
import FourOFour from 'app/components/FourOFour'
import AppTools from 'app/components/AppTools'
import FetchRoute from 'app/containers/FetchRoute'
import fetchPosts from 'app/actions/post/fetchPosts'
import fetchZine from 'app/actions/zine/fetchZine'
import fetchZines from 'app/actions/zine/fetchZines'
import fetchUsers from 'app/actions/user/fetchUsers'
import { uniq } from 'lodash'


export default ({ loading, user, zine, actions }) =>
  <main className="zine-app--main">
  {
    loading ?
      <AppLoader shouldDisplay={true} /> :
      <Switch>
        <FetchRoute
          exact path="/"
          load={async (dispatch, props) => {
            const postResponse = await dispatch(fetchPosts({ deleted: false }))

            const authorIds = uniq(postResponse.payload.map(post => post.authorId))
            dispatch(fetchUsers({ _id: authorIds.length > 1 ? authorIds: authorIds[0] }))

            const zineIds = uniq(postResponse.payload.map(post => post.zineId))
            dispatch(fetchZines({ _id: zineIds.length > 1 ? zineIds: zineIds[0] }))
          }}
          render={props =>
            <AppTools zine={zine} user={user} actions={actions}>
              <HomePage user={user} zine={zine} {...props} />
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
            <AppTools zine={zine} user={user} actions={actions}>
              <ZineHomePage user={user} zine={zine} {...props} />
            </AppTools>
          }
        />
        <FetchRoute
          exact path="/:zineName/post/:postId"
          load={async (dispatch, props) => {
            const postResponse = await dispatch(fetchPosts({ _id: props.computedMatch.params.postId, deleted: false }))
          }}
          render={({ history, post, match }) =>
            <AppTools
              zine={zine}
              user={user}
              post={post}
              actions={actions}
              history={history}
            >
              <ZinePostPage user={user} zine={zine} post={post} match={match} />
            </AppTools>
          }
        />
      </Switch>
  }
  </main>
