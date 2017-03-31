import * as React from 'react'
import MasterPage from 'app/components/ZineMasterPage'
import PostEditor from 'app/containers/PostEditor'

export default ({ zine, user, post }) =>
  <MasterPage zine={zine} user={user} >
    { post && <h1>{ post.title }</h1> }
    { post && <PostEditor readOnly={true} initialState={post.body.toJS()} />}
  </MasterPage>
