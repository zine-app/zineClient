import * as React from 'react'
import 'app/styles/zineHomePosts'
import Post from 'app/components/Post'

export default ({ posts }) =>
  posts.size ?
    <div className="zine-home-posts--container">
      <div className="row">
        {posts.map(post => <Post {...post.toJS()} key={post.id} />)}
      </div>
    </div> :
    <div className="zine-home-posts--container">
      <div className="zine-home-posts--empty-message--container">
        <p className="zine-home-posts--empty-message">
          You haven't posted anything yet. Sad! :(
        </p>
      </div>
    </div>
