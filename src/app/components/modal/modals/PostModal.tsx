import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostModal'
import 'app/styles/grid'


export default ({ props: { zine } }) =>
  <div className="post-modal--container">
    <PostForm zine={zine} />
  </div>
