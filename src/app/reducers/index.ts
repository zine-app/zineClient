import { combineReducers } from 'redux-immutablejs'
import { uiReducer as ui } from 'app/reducers/UI'
import { userReducer as users } from 'app/reducers/user'
import { zineReducer as zines } from 'app/reducers/zine'
import { postReducer as posts } from 'app/reducers/post'
import { meReducer as me } from 'app/reducers/me'
import { reducer as form } from 'redux-form/immutable'

export const rootReducer = combineReducers({
  users,
  ui,
  zines,
  posts,
  me,
  form
})
