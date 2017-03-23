import { createUser } from 'app/constants/User'
import { handleActions } from 'redux-actions'
import { List } from 'immutable'

import { createPost } from 'app/constants/Post'

const initialState = List([
  createPost({ title: 'hello', description: 'world', contentURL: 'meh' })
])

export const postReducer = handleActions({
  "": state => state
}, initialState)
