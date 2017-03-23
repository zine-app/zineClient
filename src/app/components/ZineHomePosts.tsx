import * as React from 'react'
import 'app/styles/zineHomePosts'
import Post from 'app/components/Post'

export default ({ posts }) =>
  <div className="zine-home-posts--container">
  {posts.map((post, index) => <Post {...post.toJS()} key={index} />)}
  </div>
