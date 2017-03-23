import { combineReducers } from 'redux-immutablejs'
import { appLoaderReducer as appLoader } from 'app/reducers/UI/appLoader'
import { slideoutReducer as slideout } from 'app/reducers/UI/slideout'
import { modalReducer as modal } from 'app/reducers/UI/modal'

export const uiReducer = combineReducers({
  appLoader,
  slideout,
  modal
})
