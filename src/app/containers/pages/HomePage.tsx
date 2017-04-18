import * as React from 'react'
import { connect } from 'react-redux'
import HomePage from 'app/components/pages/HomePage'
import getAllPosts from 'app/selectors/post/getAllPosts'


const mapStateToProps = state => ({
  posts: getAllPosts(state)
})


export default connect(mapStateToProps)(HomePage)
