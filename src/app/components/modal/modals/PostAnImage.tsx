import * as React from 'react'
import PostImageForm from 'app/containers/PostImageForm'
import 'app/styles/PostAnImage'


export default ({ shouldDisplay, hide, transition, props: { zineId } }) =>
  <div className="post-an-image--container">
    <div style={{ height: '2rem' }} />
    <PostImageForm zineId={zineId} hideModal={hide} />
  </div>
