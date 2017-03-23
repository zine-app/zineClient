import * as React from 'react'
import { connect } from 'react-redux'
import ZineHomePosts from 'app/components/ZineHomePosts'

const mapStateToProps = state => ({
  posts: state.get('posts')
})

export default connect(mapStateToProps)(ZineHomePosts)
