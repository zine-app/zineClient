import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePosts from 'app/components/ZineHomePosts'
import Bundle from 'app/containers/Bundle'
import fetchPosts from 'app/actions/post/fetchPosts'
import AppLoader from 'app/components/AppLoader'
import ErrorPage from 'app/components/ErrorPage'

const ZineHomePostsContainer =  ({ postLoader, posts }) =>
  <Bundle
    load={postLoader}
    loading={() => <AppLoader shouldDisplay={true} />}
    success={() => <ZineHomePosts posts={posts} />}
    error={(error) => <ErrorPage />}
  />

const mapDispatchToProps = (dispatch, { zine }) => ({
  postLoader: async () => {
    await dispatch(fetchPosts({ zineId: zine.id }))
  }
})

const mapStateToProps = (state, { zine }) => ({
  posts: state.get('posts').filter(post => post.zineId === zine.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePostsContainer)
