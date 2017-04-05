import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostModal'
import 'app/styles/grid'


export default ({ props: { zine, post = null } }) =>
  <div className="post-modal--container">
    <PostForm zine={zine} post={post} />
  </div>
