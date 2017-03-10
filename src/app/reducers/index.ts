import { combineReducers } from 'redux-immutablejs'
import { uiReducer } from 'app/reducers/UI'
import { userReducer } from 'app/reducers/user'

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer
})
