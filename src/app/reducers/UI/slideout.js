import { createSlideout } from 'app/constants/UI/Slideout'
import { handleActions } from 'redux-actions'

const initialState = createSlideout()

export const slideoutReducer = handleActions({
  "UI:SLIDEOUT:OPEN": (state, action) => state.merge({ isOpen: true }),
  "UI:SLIDEOUT:CLOSE": (state, action) => state.merge({ isOpen: false }),
  "UI:SLIDEOUT:TOGGLE": (state, action) => state.merge({ isOpen: !state.get('isOpen') })
}, initialState)
