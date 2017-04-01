import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostModal'
import 'app/styles/grid'


export default ({ props: { zineId } }) =>
  <div className="post-modal--container">
    <PostForm zineId={zineId} />
  </div>
