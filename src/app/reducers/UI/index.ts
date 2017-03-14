import { combineReducers } from 'redux-immutablejs'
import { appLoaderReducer as appLoader } from 'app/reducers/UI/appLoader'
import { slideoutReducer as slideout } from 'app/reducers/UI/slideout'
import { zineFormReducer as zineForm } from 'app/reducers/UI/zineForm'

export const uiReducer = combineReducers({
  appLoader,
  slideout,
  zineForm
})
