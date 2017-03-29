import { createSelector } from 'reselect'

const getMe = state => state.get('me')
const getUsers = state => state.get('users')

export default createSelector([getMe, getUsers],
  (me, users) => {
    console.log(me)
    return users.find(user => user.id === me.userId)
  })
