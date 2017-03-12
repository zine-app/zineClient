import { combineReducers } from 'redux-immutablejs'
import { appLoaderReducer } from 'app/reducers/UI/appLoader'
import { slideoutReducer } from 'app/reducers/UI/slideout'

export const uiReducer = combineReducers({
  appLoader: appLoaderReducer,
  slideout: slideoutReducer
})
