import * as React from 'react'
import AppTools from 'app/components/AppTools'
import MasterPage from 'app/components/ZineMasterPage'
import PostReader from 'app/components/PostReader'
import 'app/styles/zinePostPage'

export default ({ zine, user, post, actions, history }) =>
  <AppTools
    zine={zine}
    user={user}
    post={post}
    actions={actions}
    history={history}
  >
    <MasterPage zine={zine} user={user} >
      <div className="zine--post-page--container">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-md-8">
          { post && <h1 className="zine--post-page--title">{ post.title }</h1> }
          {
            (post && post.body) ?
              <div className="zine--post-page--body">
                <PostReader rawEditorState={post.body} />
              </div> :
              null
          }
          </div>
        </div>
      </div>
    </MasterPage>
  </AppTools>
