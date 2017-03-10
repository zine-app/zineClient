import { createAppLoader } from 'app/constants/UI/AppLoader'
import { handleActions } from 'redux-actions'

const initialState = createAppLoader()

export const appLoaderReducer = handleActions({
  "UI:APP_LOADER:SHOW": (state, action) => state.merge({ shouldDisplay: true }),
  "UI:APP_LOADER:HIDE": (state, action) => state.merge({ shouldDisplay: false })
}, initialState)
