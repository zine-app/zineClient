import { combineReducers } from 'redux-immutablejs'
import { uiReducer } from 'app/reducers/UI'
import { userReducer } from 'app/reducers/user'
import { reducer as form } from 'redux-form/immutable'

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  form
})
