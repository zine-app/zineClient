import { combineReducers } from 'redux-immutablejs'
import { uiReducer as ui } from 'app/reducers/UI'
import { userReducer as user } from 'app/reducers/user'
import { zineReducer as zines } from 'app/reducers/zine'
import { postReducer as posts } from 'app/reducers/post'
import { reducer as form } from 'redux-form/immutable'

export const rootReducer = combineReducers({
  user,
  ui,
  zines,
  posts,
  form
})
