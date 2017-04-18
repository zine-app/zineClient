import { createSelector } from 'reselect'
import { createPopulatedPost } from 'app/constants/Post'
import { assign, pick } from 'lodash'

const getPosts = state => state.get('posts')
const getUsers = state => state.get('users')
const getZine = state => state.get('zines')

export default createSelector(
  [getPosts, getUsers, getZine],
  (posts, users, zine) =>
    posts
      .filter(post => !post.deleted)
      .sort((postA, postB) =>
        new Date(postB.createdAt) > new Date(postA.createdAt) ? 1 :
        new Date(postB.createdAt) < new Date(postA.createdAt) ? -1 : 0
      )
      .map(post => createPopulatedPost(assign(
          pick(post, [
            'id',
            'title',
            'body',
            'createdAt'
          ]),
          {
            author: users.find(user => user.id === post.authorId),
            zine: zine.find(zine => zine.id === post.zineId)
          }
      ))))
