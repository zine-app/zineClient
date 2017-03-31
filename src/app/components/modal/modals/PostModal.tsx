import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostModal'
import 'app/styles/grid'


export default ({ shouldDisplay, hide, transition, props: { zineId } }) =>
  <div className="post-modal--container">
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-8 col-lg-6">
        <PostForm zineId={zineId} />
      </div>
    </div>
  </div>
