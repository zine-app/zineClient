import { combineReducers } from 'redux-immutablejs'
import { appLoaderReducer } from 'app/reducers/UI/appLoader'

export const uiReducer = combineReducers({
  appLoader: appLoaderReducer,
})
