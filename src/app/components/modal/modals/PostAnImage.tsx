import * as React from 'react'
import PostImageForm from 'app/containers/PostImageForm'
import 'app/styles/PostAnImage'

export default ({ shouldDisplay, hideImageModal, transition }) =>
  <div className="post-an-image--container">
    <h1 className="post-an-image--message">post image</h1>
    <div style={{ height: '2rem' }} />
    <PostImageForm />
  </div>
