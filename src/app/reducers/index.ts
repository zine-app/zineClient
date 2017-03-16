import { combineReducers } from 'redux-immutablejs'
import { uiReducer as ui } from 'app/reducers/UI'
import { userReducer as user } from 'app/reducers/user'
import { zineReducer as zines } from 'app/reducers/zine'
import { reducer as form } from 'redux-form/immutable'
import { routerReducer as router } from 'react-router-redux'

export const rootReducer = combineReducers({
  user,
  ui,
  zines,
  form,
  router
})
