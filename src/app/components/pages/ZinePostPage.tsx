import * as React from 'react'
import AppTools from 'app/components/AppTools'
import MasterPage from 'app/components/pages/ZineMasterPage'
import PostReader from 'app/components/PostReader'
import 'app/styles/zinePostPage'

const getFirstImageURL = body => {
  if(body.entityMap.length) {
    return body.entityMap[0].data.url
  }
}

export default ({ zine, user, post }) =>
    <MasterPage zine={zine} user={user} >
      <div className="zine--post-page--container">
      { post && <h1 className="zine--post-page--title">{ post.title }</h1> }
      {
        (post && post.body) ?
          <div className="zine--post-page--body">
            <PostReader rawEditorState={post.body} />
          </div> :
          null
      }
      </div>
    </MasterPage>
