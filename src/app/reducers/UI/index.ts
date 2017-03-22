import { combineReducers } from 'redux-immutablejs'
import { appLoaderReducer as appLoader } from 'app/reducers/UI/appLoader'
import { slideoutReducer as slideout } from 'app/reducers/UI/slideout'
import { postModalReducer as postModal } from 'app/reducers/UI/postModal'
import { imageModalReducer as imageModal } from 'app/reducers/UI/imageModal'

export const uiReducer = combineReducers({
  appLoader,
  slideout,
  postModal,
  imageModal
})
