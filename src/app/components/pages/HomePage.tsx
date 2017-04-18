import * as React from 'react'
import Explainer from 'app/components/Explainer'
import ZineHomePosts from 'app/components/ZineHomePosts'

export default ({ posts = [] }) =>
  <ZineHomePosts posts={posts} />
