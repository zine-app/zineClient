import { createSelector } from 'reselect'
import { createPopulatedPost } from 'app/constants/Post'
import { assign, pick } from 'lodash'

const getPosts = state => state.get('posts')
const getUsers = state => state.get('users')
const getZine = (state, props) =>
  state.get('zines').find(zine => zine.id === props.zine.id)

export default createSelector(
  [getPosts, getUsers, getZine],
  (posts, users, zine) =>
    posts
      .filter(post => post.zineId === zine.id)
      .sort((postA, postB) =>
        new Date(postB.createdAt) > new Date(postA.createdAt))
      .map(post => createPopulatedPost(assign(
          pick(post, [
            'id',
            'title',
            'body',
            'createdAt'
          ]),
          {
            author: users.find(user => user.id === post.authorId),
            zine: zine
          }
      ))))
