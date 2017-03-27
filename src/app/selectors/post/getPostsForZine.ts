import { createSelector } from 'reselect'

const getZinePosts = (state, { zine }) =>
  state.get('posts')
    .filter(post => post.zineId === zine.id)
    .sort((postA, postB) => new Date(postB.createdAt) > new Date(postA.createdAt))

export default createSelector(
    [getZinePosts],
    (posts) => posts
  )
