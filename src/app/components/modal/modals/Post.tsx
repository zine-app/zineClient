import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostForm'


export default ({ shouldDisplay, hide, transition, props: { zineId } }) =>
  <div className="post-an-image--container">
    <PostForm zineId={zineId} />
  </div>
