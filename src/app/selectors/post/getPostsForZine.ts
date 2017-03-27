import { createSelector } from 'reselect'

const getZinePosts = (state, { zine }) =>
  state.get('posts')
    .filter(post => post.getIn(['zine', 'id']) === zine.id)
    .sort((postA, postB) => new Date(postB.createdAt) > new Date(postA.createdAt))

export default createSelector(
    [getZinePosts],
    (posts) => posts
  )
