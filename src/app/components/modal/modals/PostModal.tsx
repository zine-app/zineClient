import * as React from 'react'
import PostForm from 'app/containers/forms/PostForm'
import 'app/styles/PostModal'
import 'app/styles/grid'
import {
  convertFromRaw,
  EditorState,
} from 'draft-js'


export default ({ props: { zine, post = null } }) =>
  <div className="post-modal--container">
    <PostForm
      zine={zine}
      post={
        post ?
          post.set(
            'body',
              EditorState.createWithContent(
                convertFromRaw(post.get('body').toJS())
              )
          ):
          null
      }
    />
  </div>
