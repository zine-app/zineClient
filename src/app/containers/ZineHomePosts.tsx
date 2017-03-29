import * as React from 'react'
import { connect } from 'react-redux'
import getPostsForZine from 'app/selectors/post/getPostsForZine'
import ZineHomePosts from 'app/components/ZineHomePosts'
import fetchPosts from 'app/actions/post/fetchPosts'
import createUI from 'app/containers/UI'

const ZineHomePostsContainer = ({ load, posts }) =>
  createUI({
    name: 'zineHomePostsConainer',
    load
  })(() =>  <ZineHomePosts posts={posts} />)


const mapDispatchToProps = (dispatch, { zine }) => ({
  load: () => dispatch(fetchPosts({ zineId: zine.id }))
})

const mapStateToProps = (state, props) => ({
  posts: getPostsForZine(state, props)
})

export default connect(mapStateToProps, mapDispatchToProps)(ZineHomePostsContainer)
